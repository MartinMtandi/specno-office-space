import { useState } from 'react'
import { Member, updateMember, removeMemberFromOffice } from '../services/officeService'

export const useStaffManagement = (officeId: string) => {
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [isEditingStaff, setIsEditingStaff] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const handleEditStaff = (member: Member) => {
    setSelectedMember(member)
    setIsEditingStaff(true)
  }

  const handleUpdateStaff = (member: Member) => {
    if (selectedMember) {
      updateMember(officeId, member)
      window.dispatchEvent(new Event('officeUpdated'))
      setIsEditingStaff(false)
      setSelectedMember(null)
    }
  }

  const handleDeleteStaff = (member: Member) => {
    removeMemberFromOffice(officeId, member.id)
    window.dispatchEvent(new Event('officeUpdated'))
  }

  return {
    showAddMemberModal,
    setShowAddMemberModal,
    isEditingStaff,
    setIsEditingStaff,
    selectedMember,
    setSelectedMember,
    searchQuery,
    setSearchQuery,
    handleEditStaff,
    handleUpdateStaff,
    handleDeleteStaff
  }
}
