import { NewOfficeForm } from '../components/NewOfficeForm'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { saveOffice, OfficeError } from '../services/officeService'
import { useState } from 'react'

interface FormValues {
  officeName: string;
  address: string;
  email: string;
  phone: string;
  capacity: string;
  accent: string;
}

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

interface Office extends FormValues {
  id: string;
  createdAt: string;
  updatedAt: string;
  members: Member[];
}

export const OfficeForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const handleSave = (values: FormValues) => {
    setError(null)
    
    const newOffice: Office = {
      ...values,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      members: []
    }
    
    try {
      saveOffice(newOffice)
      navigate('/')
    } catch (error) {
      if (error instanceof OfficeError) {
        setError(error.message)
      } else {
        setError('Failed to save office. Please try again.')
      }
    }
  }

  return (
    <>
      <NewOfficeForm onSave={handleSave} error={error} />
    </>
  )
}
