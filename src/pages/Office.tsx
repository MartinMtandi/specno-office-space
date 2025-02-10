import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { Office as OfficeType, OfficeError, deleteOffice, getOfficeById, createOffice, updateOfficeData } from '../services/officeService'
import { Typography } from '../components/Typography'
import specnoLogo from '../assets/logo/SpecnoLogo_Blue.svg'
import { Modal } from '../components/Modal'
import { StaffMemberForm } from '../components/StaffMemberForm'
import { StaffList } from '../components/StaffList'
import { OfficeForm } from '../components/OfficeForm'
import { PageHeader } from '../components/PageHeader'
import { DeleteOfficeModal } from '../components/DeleteOfficeModal'
import { OfficeView } from '../components/OfficeView'
import { useOffice } from '../hooks/useOffice'
import { useStaffManagement } from '../hooks/useStaffManagement'

const Office = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const isEditMode = searchParams.get('mode') === 'edit'
  
  const { office, setOffice, error, setError } = useOffice(id)
  const staffManagement = useStaffManagement(id!)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  const handleSave = (values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
    try {
      const newOffice = createOffice(values)
      window.dispatchEvent(new Event('officeUpdated'))
      navigate(`/office/${newOffice.id}`)
    } catch (error) {
      setError(error instanceof OfficeError ? error.message : 'Failed to create office')
    }
  }

  const handleUpdate = (values: Omit<OfficeType, 'id' | 'createdAt' | 'updatedAt' | 'members'>) => {
    try {
      if (!office) return
      const updatedOffice = updateOfficeData(office, values)
      setOffice(updatedOffice)
      window.dispatchEvent(new Event('officeUpdated'))
      navigate(`/office/${id}`)
    } catch (error) {
      setError(error instanceof OfficeError ? error.message : 'Failed to update office')
    }
  }

  const handleAddMember = () => {
    if (office && id) {
      const updatedOffice = getOfficeById(id)
      if (updatedOffice) {
        setOffice({
          ...updatedOffice,
          members: updatedOffice.members || []
        })
      }
    }
    staffManagement.setShowAddMemberModal(false)
  }

  if (!office) {
    return (
      <Container>
        <PageHeader
          title="New Office"
          onBack={() => navigate('/')}
        />
        <OfficeForm
          initialValues={{
            officeName: '',
            address: '',
            email: '',
            phone: '',
            capacity: '0',
            accent: '#000000'
          }}
          onUpdate={handleSave}
          error={error}
        />
      </Container>
    )
  }

  if (isEditMode) {
    return (
      <Container>
        <OfficeForm
          initialValues={{
            id: office.id,
            officeName: office.officeName,
            address: office.address,
            email: office.email,
            phone: office.phone,
            capacity: office.capacity,
            accent: office.accent
          }}
          onUpdate={handleUpdate}
          onDelete={() => setShowDeleteConfirmation(true)}
          error={error}
        />
        {showDeleteConfirmation && (
          <Modal isOpen={showDeleteConfirmation} onClose={() => setShowDeleteConfirmation(false)}>
            <DeleteOfficeModal
              officeName={office.officeName}
              onDelete={() => {
                if (id) {
                  deleteOffice(id)
                  setShowDeleteConfirmation(false)
                  navigate('/')
                }
              }}
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
      <OfficeView
        office={office}
        searchQuery={staffManagement.searchQuery}
        onSearch={(e) => staffManagement.setSearchQuery(e.target.value)}
      />
      {office.members.length === 0 ? (
        <EmptyState>
          <EmptyStateContent>
            <LogoContainer>
              <img src={specnoLogo} alt="Specno Logo" />
            </LogoContainer>
            <Typography>Add staff members to this office using the + button</Typography>
          </EmptyStateContent>
        </EmptyState>
      ) : (
        <StaffList
          members={office.members.filter(member => {
            const searchTerm = staffManagement.searchQuery.toLowerCase();
            return (
              (member.firstName || '').toLowerCase().includes(searchTerm) ||
              (member.lastName || '').toLowerCase().includes(searchTerm)
            );
          })}
          onEditMember={staffManagement.handleEditStaff}
          onDeleteMember={staffManagement.handleDeleteStaff}
        />
      )}
      {staffManagement.showAddMemberModal && (
        <Modal
          isOpen={staffManagement.showAddMemberModal}
          onClose={() => staffManagement.setShowAddMemberModal(false)}
        >
          <StaffMemberForm
            office={office}
            onClose={() => staffManagement.setShowAddMemberModal(false)}
            onSubmit={handleAddMember}
          />
        </Modal>
      )}
      {staffManagement.isEditingStaff && (
        <Modal
          isOpen={staffManagement.isEditingStaff}
          onClose={() => {
            staffManagement.setIsEditingStaff(false)
            staffManagement.setSelectedMember(null)
          }}
        >
          <StaffMemberForm
            office={office}
            onClose={() => {
              staffManagement.setIsEditingStaff(false)
              staffManagement.setSelectedMember(null)
            }}
            onSubmit={staffManagement.handleUpdateStaff}
            initialValues={staffManagement.selectedMember || undefined}
          />
        </Modal>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.layout.gap.md};
`

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 400px;
  color: ${({theme}) => theme.colors.text.muted};
  padding: ${({theme}) => theme.spacing.xl};
`

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.layout.gap.md};
  text-align: center;
  padding: ${({theme}) => theme.spacing.xl};
`

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom: ${({theme}) => theme.spacing.xl};

  img {
    width: 100%;
    height: auto;
  }
`

export default Office
