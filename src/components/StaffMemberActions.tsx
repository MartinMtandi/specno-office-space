import styled from 'styled-components'
import { Modal } from './Modal'
import { Button } from './Button'
import { Member } from '../services/officeService'
import { Typography } from './Typography'
import { useState } from 'react'
import backArrow from '../assets/icons/arrow-left.svg'
import { theme } from '../theme'

interface StaffMemberActionsProps {
  isOpen: boolean
  onClose: () => void
  member: Member
  onEdit: (member: Member) => void
  onDelete: (member: Member) => void
}

export const StaffMemberActions = ({ isOpen, onClose, member, onEdit, onDelete }: StaffMemberActionsProps) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)

  if (showDeleteConfirmation) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Container>
          <TitleContainer>
            <BackButton onClick={() => setShowDeleteConfirmation(false)}>
              <img src={backArrow} alt="Go back" width={24} height={24} />
            </BackButton>
            <Typography variant="h4">
              Are you sure you want to delete staff member?
            </Typography>
          </TitleContainer>
          <ButtonContainer>
            <Button 
              variant="danger" 
              onClick={() => {
                onDelete(member)
                onClose()
              }}
            >
              Delete Member
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => {
                setShowDeleteConfirmation(false)
                onClose()
              }}
            >
              Keep Member
            </Button>
          </ButtonContainer>
        </Container>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <Button 
          variant="primary" 
          onClick={() => {
            onEdit(member)
            onClose()
          }}
        >
          Edit Staff Member
        </Button>
        <Button 
          variant="warning" 
          onClick={() => setShowDeleteConfirmation(true)}
        >
          Delete Staff Member
        </Button>
      </Container>
    </Modal>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.gap.md};
  min-width: 300px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.md};
  margin-top: ${theme.spacing.sm};
`

const TitleContainer = styled.div`
  display: flex;
  align-items: start;
  gap: ${theme.layout.gap.xs};
  width: 100%;
`

const BackButton = styled.button`
  background: none;
  border: none;
  padding: ${theme.spacing.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
