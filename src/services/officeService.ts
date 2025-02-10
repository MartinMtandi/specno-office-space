const STORAGE_KEY = 'offices'

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface Office {
  id: string;
  officeName: string;
  address: string;
  email: string;
  phone: string;
  capacity: string;
  accent: string;
  createdAt: string;
  updatedAt: string;
  members: Member[];
}

export class OfficeError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'OfficeError'
  }
}

export const getOffices = (): Office[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error('Error reading offices:', error)
    return []
  }
}

export const checkOfficeNameExists = (officeName: string): boolean => {
  const offices = getOffices()
  return offices.some(office => office.officeName.toLowerCase() === officeName.toLowerCase())
}

export const saveOffice = (office: Office): void => {
  try {
    if (checkOfficeNameExists(office.officeName)) {
      throw new OfficeError('An office with this name already exists')
    }

    const offices = getOffices()
    offices.push(office)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(offices))
  } catch (error) {
    console.error('Error saving office:', error)
    throw error
  }
}

export const updateOffice = (updatedOffice: Office): void => {
  try {
    const offices = getOffices()
    const index = offices.findIndex(office => office.id === updatedOffice.id)
    
    // Check if name exists but skip the current office
    const nameExists = offices.some(office => 
      office.id !== updatedOffice.id && 
      office.officeName.toLowerCase() === updatedOffice.officeName.toLowerCase()
    )
    
    if (nameExists) {
      throw new OfficeError('An office with this name already exists')
    }

    if (index !== -1) {
      offices[index] = { ...updatedOffice, updatedAt: new Date().toISOString() }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(offices))
    }
  } catch (error) {
    console.error('Error updating office:', error)
    throw error
  }
}

export const deleteOffice = (id: string): void => {
  try {
    const offices = getOffices()
    const filteredOffices = offices.filter(office => office.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredOffices))
  } catch (error) {
    console.error('Error deleting office:', error)
    throw new Error('Failed to delete office')
  }
}

export const getOfficeById = (id: string): Office | undefined => {
  try {
    const offices = getOffices()
    return offices.find(office => office.id === id)
  } catch (error) {
    console.error('Error getting office:', error)
    return undefined
  }
}

export const addMemberToOffice = (officeId: string, member: Member): void => {
  try {
    const offices = getOffices()
    const officeIndex = offices.findIndex(office => office.id === officeId)
    
    if (officeIndex === -1) {
      throw new OfficeError('Office not found')
    }

    offices[officeIndex].members.push(member)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(offices))
  } catch (error) {
    console.error('Error adding member to office:', error)
    throw error
  }
}

export const removeMemberFromOffice = (officeId: string, memberId: string): void => {
  try {
    const offices = getOffices()
    const officeIndex = offices.findIndex(office => office.id === officeId)
    
    if (officeIndex === -1) {
      throw new OfficeError('Office not found')
    }

    const office = offices[officeIndex]
    office.members = office.members.filter(member => member.id !== memberId)
    
    offices[officeIndex] = office
    localStorage.setItem(STORAGE_KEY, JSON.stringify(offices))
  } catch (error) {
    console.error('Error removing member from office:', error)
    throw error
  }
}

export const updateMember = (officeId: string, updatedMember: Member): void => {
  try {
    const offices = getOffices()
    const officeIndex = offices.findIndex(office => office.id === officeId)
    
    if (officeIndex === -1) {
      throw new OfficeError('Office not found')
    }

    const office = offices[officeIndex]
    const memberIndex = office.members.findIndex(member => member.id === updatedMember.id)
    
    if (memberIndex === -1) {
      throw new OfficeError('Member not found')
    }

    office.members[memberIndex] = updatedMember
    offices[officeIndex] = office
    localStorage.setItem(STORAGE_KEY, JSON.stringify(offices))
  } catch (error) {
    console.error('Error updating member:', error)
    throw error
  }
}

export const createOffice = (values: Omit<Office, 'id' | 'createdAt' | 'updatedAt' | 'members'>): Office => {
  const newOfficeData = {
    ...values,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    members: []
  }
  saveOffice(newOfficeData)
  return newOfficeData
}

export const updateOfficeData = (office: Office, values: Omit<Office, 'id' | 'createdAt' | 'updatedAt' | 'members'>): Office => {
  const updatedOfficeData = {
    ...values,
    id: office.id,
    createdAt: office.createdAt,
    updatedAt: new Date().toISOString(),
    members: office.members || []
  }
  updateOffice(updatedOfficeData)
  return updatedOfficeData
}
