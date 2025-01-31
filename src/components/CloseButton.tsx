import styled from 'styled-components'
import closeIcon from '../assets/close-circle.svg'

interface CloseButtonProps {
  onClick: () => void
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <Button onClick={onClick}>
      <img src={closeIcon} alt="Close" width={24} height={24} />
    </Button>
  )
}

const Button = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
