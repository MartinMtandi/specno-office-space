import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Typography } from './Typography'

interface NewOfficeFormProps {
  onSave: () => void
}

export const NewOfficeForm = ({ onSave }: NewOfficeFormProps) => {
  const navigate = useNavigate()

  return (
    <>
      <HeaderRow>
        <BackButton onClick={() => navigate('/')}>
          ← Back
        </BackButton>
        <Typography variant="h1">New Office</Typography>
      </HeaderRow>
      <Form>
        <FormGroup>
          <Label>Company Name</Label>
          <Input type="text" placeholder="Enter company name" />
        </FormGroup>
        <FormGroup>
          <Label>Email Address</Label>
          <Input type="email" placeholder="Enter email address" />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input type="tel" placeholder="Enter phone number" />
        </FormGroup>
        <FormGroup>
          <Label>Office Capacity</Label>
          <Input type="number" placeholder="Enter office capacity" />
        </FormGroup>
        <FormGroup>
          <Label>Total Staff</Label>
          <Input type="number" placeholder="Enter total staff" />
        </FormGroup>
        <FormGroup>
          <Label>Company Address</Label>
          <TextArea placeholder="Enter company address" rows={3} />
        </FormGroup>
        <ButtonGroup>
          <CancelButton onClick={() => navigate('/')}>Cancel</CancelButton>
          <SaveButton onClick={onSave}>
            Save Office
          </SaveButton>
        </ButtonGroup>
      </Form>
    </>
  )
}

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: #64748B;
  cursor: pointer;
  padding: 8px;
  font-size: 16px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #334155;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  color: #64748B;
  font-size: 14px;
`

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 16px;
  color: #334155;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3B82F6;
  }

  &::placeholder {
    color: #94A3B8;
  }
`

const TextArea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 16px;
  color: #334155;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3B82F6;
  }

  &::placeholder {
    color: #94A3B8;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

const Button = styled.button`
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

const CancelButton = styled(Button)`
  background: white;
  border: 1px solid #E2E8F0;
  color: #64748B;

  &:hover {
    background: #F1F5F9;
    border-color: #CBD5E1;
  }
`

const SaveButton = styled(Button)`
  background: #3B82F6;
  border: none;
  color: white;

  &:hover {
    background: #2563EB;
  }
`
