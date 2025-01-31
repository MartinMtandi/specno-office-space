import styled from 'styled-components'
import { CloseButton } from './CloseButton'

interface StaffMemberFormProps {
  onClose: () => void
  onSave: () => void
}

export const StaffMemberForm = ({ onClose, onSave }: StaffMemberFormProps) => {
  return (
    <ModalContent>
      <HeaderRow>
        <ModalHeader>New Staff Member</ModalHeader>
        <CloseButton onClick={onClose} />
      </HeaderRow>
      <ModalBody>
        <Form>
          <FormGroup>
            <Input type="text" placeholder="First Name" />
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Last Name" />
          </FormGroup>
          <ButtonGroup>
            <SaveButton onClick={onSave}>
              NEXT
            </SaveButton>
          </ButtonGroup>
        </Form>
      </ModalBody>
    </ModalContent>
  )
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ModalHeader = styled.h2`
  font-size: 24px;
  color: #1E293B;
  margin: 0;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const SaveButton = styled(Button)`
  background: #3B82F6;
  border: none;
  color: white;

  &:hover {
    background: #2563EB;
  }
`
