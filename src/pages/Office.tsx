import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
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

export const Office = () => {
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

  const handleDelete = () => {
    if (!id) return

    try {
      deleteOffice(id)
      navigate('/')
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to delete office')
      }
    }
  }

  const handleUpdate = (values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
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
  }

  const handleSave = (values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
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
  }

  const handleAddMember = () => {
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
  }

  const handleEditStaff = (member: Member) => {
    setSelectedMember(member)
    setIsEditingStaff(true)
  }

  const handleUpdateStaff = (member: Member) => {
    if (office && selectedMember) {
      updateMember(office.id, member)
      const updatedOffice = getOfficeById(office.id)
      setOffice(updatedOffice || null)
      setIsEditingStaff(false)
      setSelectedMember(null)
    }
  }

  const handleDeleteStaff = (member: Member) => {
    if (office) {
      removeMemberFromOffice(office.id, member.id)
      const updatedOffice = getOfficeById(office.id)
      setOffice(updatedOffice || null)
    }
  }

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
          onDelete={handleDelete}
          error={error}
        />
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
            onChange={(e) => setSearchQuery(e.target.value)}
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
        members={office.members.filter(member => {
          const searchTerm = searchQuery.toLowerCase();
          return (
            (member.firstName || '').toLowerCase().includes(searchTerm) ||
            (member.lastName || '').toLowerCase().includes(searchTerm)
          );
        })}
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
  gap: 16px;
`

const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8FAFC;
  border-radius: 8px;
  padding: 48px 24px;
  margin-top: 16px;
`

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  color: #6b7280;
`

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom: 8px;

  img {
    width: 100%;
    height: auto;
  }
`
