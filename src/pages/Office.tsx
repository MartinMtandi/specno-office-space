import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { OfficeForm } from '../components/OfficeForm'
import styled from 'styled-components'
import { getOfficeById, saveOffice, updateOffice, deleteOffice, Office as OfficeType, OfficeError } from '../services/officeService'
import { Card } from '../components/Card'
import { PageHeader } from '../components/PageHeader'
import { Typography } from '../components/Typography'
import specnoLogo from '../assets/logo/SpecnoLogo_Blue.svg'

export const Office = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const isEditMode = searchParams.get('mode') === 'edit'
  const [office, setOffice] = useState<OfficeType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      const officeData = getOfficeById(id)
      if (officeData) {
        setOffice(officeData)
      } else {
        navigate('/')
      }
    }
  }, [id, navigate])

  if (!office) {
    return null
  }

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
      updateOffice({
        ...office,
        ...values,
      })
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
      saveOffice({
        ...office,
        ...values,
        updatedAt: new Date().toISOString()
      })
      navigate(`/office/${id}`)
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to save office')
      }
    }
  }

  if (isEditMode) {
    return (
      <OfficeForm 
        initialValues={office}
        onSave={handleSave}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        error={error}
      />
    )
  }

  return (
    <Container>
      <PageHeader title="Office" />
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
      {office.members.length === 0 && (
        <EmptyState>
          <EmptyStateContent>
            <LogoContainer>
              <img src={specnoLogo} alt="Specno Logo" />
            </LogoContainer>
            <Typography variant="h2">No Staff Members</Typography>
            <Typography>Add staff members to this office using the + button</Typography>
          </EmptyStateContent>
        </EmptyState>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
