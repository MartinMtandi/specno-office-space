import { NewOfficeForm } from '../components/NewOfficeForm'
import { useNavigate } from 'react-router-dom'

export const OfficeForm = () => {
  const navigate = useNavigate()

  const handleSave = () => {
    // TODO: Handle saving the office
    navigate('/')
  }

  return (
    <NewOfficeForm onSave={handleSave} />
  )
}
