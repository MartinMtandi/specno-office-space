import styled from 'styled-components'
import { Typography } from './Typography'

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isRotated?: boolean;
}

interface ButtonContainerProps {
  isRotated?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  color: #64748B;

  &:hover {
    color: #334155;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.6;
    transition: all 0.2s ease-in-out;
    transform: ${props => props.isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
  }

  &:hover img {
    opacity: 0.8;
  }
`

export const Button = ({ text, icon, onClick, isRotated }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} isRotated={isRotated}>
      <Typography variant="body">{text}</Typography>
      {icon && <img src={icon} alt="" />}
    </ButtonContainer>
  )
}
