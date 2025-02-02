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
