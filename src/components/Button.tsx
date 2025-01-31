import styled from 'styled-components'
import { Typography } from './Typography'

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isRotated?: boolean;
}

interface StyledButtonProps {
  $isRotated?: boolean;
}

const ButtonContainer = styled.button<StyledButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  color: #64748B;

  img {
    transition: transform 0.3s ease;
    transform: ${props => props.$isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
  }

  &:hover {
    color: #334155;
  }
`

export const Button = ({ text, icon, onClick, isRotated }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} $isRotated={isRotated}>
      {text && <Typography variant="body">{text}</Typography>}
      {icon && <img src={icon} alt={text || 'button icon'} />}
    </ButtonContainer>
  )
}
