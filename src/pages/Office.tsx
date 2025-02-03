import { useState, useEffect, useMemo, useCallback } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { OfficeForm } from '../components/OfficeForm'
import styled from 'styled-components'
import { getOfficeById, saveOffice, updateOffice, deleteOffice, Office as OfficeType, OfficeError, updateMember, removeMemberFromOffice, Member } from '../services/officeService'
import { Card } from '../components/Card'
import { PageHeader } from '../components/PageHeader'
import { Typography } from '../components/Typography'
import specnoLogo from '../assets/logo/SpecnoLogo_Blue.svg'
import { Modal } from '../components/Modal'
import { StaffMemberForm } from '../components/StaffMemberForm'
import { StaffList } from '../components/StaffList'
import { Input } from '../components/Input'
import searchIcon from '../assets/icons/Search.svg'
import { DeleteOfficeModal } from '../components/DeleteOfficeModal'
import { theme } from '../theme'

const Office = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const isEditMode = searchParams.get('mode') === 'edit'
  const [office, setOffice] = useState<OfficeType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showAddMemberModal, setShowAddMemberModal] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [isEditingStaff, setIsEditingStaff] = useState(false)
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  useEffect(() => {
    if (id) {
      const officeData = getOfficeById(id)
      if (officeData) {
        setOffice(officeData)
      } else {
        navigate('/')
      }
    }
  }, [id, navigate, lastUpdate])

  useEffect(() => {
    const handleOfficeUpdate = () => {
      setLastUpdate(Date.now())
    }

    window.addEventListener('officeUpdated', handleOfficeUpdate)
    return () => {
      window.removeEventListener('officeUpdated', handleOfficeUpdate)
    }
  }, [])

  const filteredStaff = useMemo(() => {
    if (!office?.members) return []
    return office.members.filter(member => 
      (member.firstName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.lastName || '').toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [office?.members, searchQuery])

  const handleDelete = useCallback(() => {
    if (!id) return

    try {
      deleteOffice(id)
      setShowDeleteConfirmation(false)
      navigate('/')
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to delete office')
      }
    }
  }, [id, navigate])

  const handleDeleteClick = useCallback(() => {
    setShowDeleteConfirmation(true)
  }, [])

  const handleUpdate = useCallback((values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
    setError(null)
    try {
      if (!office) return;

      updateOffice({
        ...values,
        id: office.id,
        createdAt: office.createdAt,
        updatedAt: new Date().toISOString(),
        members: office.members || []
      })
      setLastUpdate(Date.now())
      navigate(`/office/${id}`)
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to update office')
      }
    }
  }, [office, id, navigate])

  const handleSave = useCallback((values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
    setError(null)
    try {
      if (!office) return;

      saveOffice({
        ...values,
        id: office.id,
        createdAt: office.createdAt,
        updatedAt: new Date().toISOString(),
        members: office.members || []
      })
      setLastUpdate(Date.now())
      navigate(`/office/${id}`)
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to save office')
      }
    }
  }, [office, id, navigate])

  const handleAddMember = useCallback(() => {
    if (office) {
      const updatedOffice = getOfficeById(office.id)
      if (updatedOffice) {
        setOffice({
          ...updatedOffice,
          members: updatedOffice.members || []
        })
        setLastUpdate(Date.now())
      }
    }
    setShowAddMemberModal(false)
  }, [office])

  const handleEditStaff = useCallback((member: Member) => {
    setSelectedMember(member)
    setIsEditingStaff(true)
  }, [])

  const handleUpdateStaff = useCallback((member: Member) => {
    if (office && selectedMember) {
      updateMember(office.id, member)
      const updatedOffice = getOfficeById(office.id)
      setOffice(updatedOffice || null)
      setIsEditingStaff(false)
      setSelectedMember(null)
    }
  }, [office, selectedMember])

  const handleDeleteStaff = useCallback((member: Member) => {
    if (office) {
      removeMemberFromOffice(office.id, member.id)
      const updatedOffice = getOfficeById(office.id)
      setOffice(updatedOffice || null)
    }
  }, [office])

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  if (!office) {
    return null
  }

  if (isEditMode) {
    return (
      <Container>
        <OfficeForm
          initialValues={{
            officeName: office.officeName,
            address: office.address,
            email: office.email,
            phone: office.phone,
            capacity: office.capacity,
            accent: office.accent
          }}
          onUpdate={handleUpdate}
          onSave={handleSave}
          onDelete={handleDeleteClick}
          error={error}
        />
        {showDeleteConfirmation && office && (
          <Modal isOpen={showDeleteConfirmation} onClose={() => setShowDeleteConfirmation(false)}>
            <DeleteOfficeModal
              officeName={office.officeName}
              onDelete={handleDelete}
              onKeep={() => setShowDeleteConfirmation(false)}
            />
          </Modal>
        )}
      </Container>
    )
  }

  return (
    <Container>
      <PageHeader
        title="Office"
        onBack={() => navigate('/')}
      />
      <Card
        id={office.id}
        companyName={office.officeName}
        totalStaff={office.members.length}
        officeCapacity={parseInt(office.capacity)}
        phoneNumber={office.phone}
        emailAddress={office.email}
        companyAddress={office.address}
        accent={office.accent}
      />
      {office.members.length > 0 && (
        <SearchContainer>
          <Input
            name="search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            icon={<img src={searchIcon} alt="Search" />}
            iconPosition="right"
          />
        </SearchContainer>
      )}
      {office.members.length === 0 ? (
        <EmptyState>
          <EmptyStateContent>
            <LogoContainer>
              <img src={specnoLogo} alt="Specno Logo" />
            </LogoContainer>
            <Typography>Add staff members to this office using the + button</Typography>
          </EmptyStateContent>
        </EmptyState>
      ) : <StaffList
        members={filteredStaff}
        onEditMember={handleEditStaff}
        onDeleteMember={handleDeleteStaff}
      />}
      {showAddMemberModal && (
        <Modal
          isOpen={showAddMemberModal}
          onClose={() => setShowAddMemberModal(false)}
        >
          <StaffMemberForm
            office={office}
            onClose={() => setShowAddMemberModal(false)}
            onSubmit={handleAddMember}
          />
        </Modal>
      )}
      {isEditingStaff && (
        <Modal
          isOpen={isEditingStaff}
          onClose={() => {
            setIsEditingStaff(false)
            setSelectedMember(null)
          }}
        >
          <StaffMemberForm
            office={office}
            onClose={() => {
              setIsEditingStaff(false)
              setSelectedMember(null)
            }}
            onSubmit={handleUpdateStaff}
            initialValues={selectedMember || undefined}
          />
        </Modal>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.md};
`

const SearchContainer = styled.div`
  width: 100%;
  max-width: ${theme.layout.maxContentWidth};
  margin: 0 auto;
  padding-top: ${theme.spacing.sm};
`

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background.main};
  border-radius: ${theme.layout.borderRadius.sm};
  padding: 48px ${theme.spacing.xl};
  margin-top: ${theme.spacing.lg};
`

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.gap.md};
  text-align: center;
  color: ${theme.colors.text.muted};
`

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom: ${theme.spacing.sm};

  img {
    width: 100%;
    height: auto;
  }
`

export default Office
