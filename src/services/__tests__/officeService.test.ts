import { describe, it, expect, beforeEach } from 'vitest'
import {
  getOffices,
  saveOffice,
  updateOffice,
  getOfficeById,
  addMemberToOffice,
  removeMemberFromOffice,
  updateMember,
  OfficeError
} from '../officeService'

describe('Office Service', () => {
  const mockOffice = {
    id: '1',
    officeName: 'Test Office',
    address: 'Test Address',
    email: 'test@example.com',
    phone: '1234567890',
    capacity: '10',
    accent: '#000000',
    members: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  const mockMember = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    avatar: 'avatar1'
  }

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
  })

  describe('getOffices', () => {
    it('returns empty array when no offices exist', () => {
      expect(getOffices()).toEqual([])
    })

    it('returns offices from localStorage', () => {
      localStorage.setItem('offices', JSON.stringify([mockOffice]))
      expect(getOffices()).toEqual([mockOffice])
    })
  })

  describe('saveOffice', () => {
    it('saves new office to localStorage', () => {
      saveOffice(mockOffice)
      expect(getOffices()).toEqual([mockOffice])
    })

    it('throws error if office name already exists', () => {
      saveOffice(mockOffice)
      expect(() => saveOffice(mockOffice)).toThrow(OfficeError)
    })
  })

  describe('updateOffice', () => {
    it('updates existing office', () => {
      saveOffice(mockOffice)
      const updatedOffice = { ...mockOffice, officeName: 'Updated Office' }
      updateOffice(updatedOffice)
      expect(getOfficeById('1')?.officeName).toBe('Updated Office')
    })

    it('throws error if office name already exists', () => {
      saveOffice(mockOffice)
      saveOffice({ ...mockOffice, id: '2', officeName: 'Second Office' })
      expect(() => 
        updateOffice({ ...mockOffice, id: '2', officeName: 'Test Office' })
      ).toThrow(OfficeError)
    })
  })

  describe('Member Operations', () => {
    beforeEach(() => {
      saveOffice(mockOffice)
    })

    it('adds member to office', () => {
      addMemberToOffice('1', mockMember)
      const office = getOfficeById('1')
      expect(office?.members).toEqual([mockMember])
    })

    it('removes member from office', () => {
      addMemberToOffice('1', mockMember)
      removeMemberFromOffice('1', '1')
      const office = getOfficeById('1')
      expect(office?.members).toEqual([])
    })

    it('updates member in office', () => {
      addMemberToOffice('1', mockMember)
      const updatedMember = { ...mockMember, firstName: 'Jane' }
      updateMember('1', updatedMember)
      const office = getOfficeById('1')
      expect(office?.members[0].firstName).toBe('Jane')
    })
  })
})
