import styled from 'styled-components'
import { Button } from './Button'
import { Typography } from './Typography'
interface DeleteOfficeModalProps {
  officeName: string
  onDelete: () => void
  onKeep: () => void
}

export const DeleteOfficeModal = ({ officeName, onDelete, onKeep }: DeleteOfficeModalProps) => {
  return (
    <Content>
      <Typography variant="h4">Are you sure you want to delete {officeName} office?</Typography>
      <ButtonGroup>
        <Button type="button" variant="danger" onClick={onDelete}>
          Delete office
        </Button>
        <Button type="button" variant="secondary" onClick={onKeep}>
          Keep office
        </Button>
      </ButtonGroup>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.layout.gap.md};
  min-width: 300px;
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.layout.gap.md};
  margin-top: ${({theme}) => theme.spacing.xxxl};
`
