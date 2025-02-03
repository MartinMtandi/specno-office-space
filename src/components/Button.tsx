import styled, { css } from 'styled-components'
import { theme } from '../theme'

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isRotated?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'back' | 'close' | 'danger' | 'warning';
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

interface StyledButtonProps {
  $isRotated?: boolean;
  $variant: ButtonProps['variant'];
}

const minWidth = "200px";

export const Button = ({ 
  text, 
  icon, 
  onClick, 
  isRotated, 
  variant = 'ghost', 
  children,
  type = 'button',
  className,
  style
}: ButtonProps) => {
  return (
    <ButtonContainer 
      onClick={onClick}
      $isRotated={isRotated}
      $variant={variant}
      type={type}
      className={className}
      style={style}
    >
      {text || children}
      {icon && <img src={icon} alt="" width={20} height={20} />}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.layout.gap.xs};
  text-align: center;
  font-family: inherit;
  transition: ${theme.transitions.default};

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          background: ${theme.colors.primary.main};
          border: 1px solid transparent;
          color: ${theme.colors.white};
          padding: ${theme.layout.padding.button};
          border-radius: ${theme.layout.borderRadius.full};
          font-size: ${theme.fontSize.sm};
          font-weight: ${theme.fontWeight.medium};
          text-transform: uppercase;
          justify-content: center;
          width: fit-content;
          min-width: ${minWidth};

          &:hover {
            background: ${theme.colors.primary.light};
            border-color: ${theme.colors.primary.main};
            color: ${theme.colors.text.primary};
          }
        `
      case 'secondary':
        return css`
          background: transparent;
          border: 1px solid transparent;
          color: ${theme.colors.primary.main};
          padding: ${theme.layout.padding.button};
          text-transform: uppercase;
          border-radius: ${theme.layout.borderRadius.full};
          font-size: ${theme.fontSize.sm};
          font-weight: ${theme.fontWeight.medium};
          justify-content: center;

          &:hover {
            background: ${theme.colors.secondary.light};
            border-color: ${theme.colors.secondary.main};
            color: ${theme.colors.secondary.dark};
          }
        `
      case 'danger':
        return css`
          background: ${theme.colors.danger.main};
          border: 1px solid transparent;
          color: ${theme.colors.white};
          padding: ${theme.layout.padding.button};
          text-transform: uppercase;
          border-radius: ${theme.layout.borderRadius.full};
          font-size: ${theme.fontSize.sm};
          font-weight: ${theme.fontWeight.medium};
          justify-content: center;
          width: fit-content;
          min-width: ${minWidth};

          &:hover {
              background: ${theme.colors.danger.light};
              border-color: ${theme.colors.danger.main};
              color: ${theme.colors.danger.dark};
          }
        `;
      case 'warning':
          return `
            background: transparent;
            border: 1px solid transparent;
            color: ${theme.colors.primary.main};
            padding: ${theme.layout.padding.button};
            text-transform: uppercase;
            border-radius: ${theme.layout.borderRadius.full};
            font-size: ${theme.fontSize.sm};
            font-weight: ${theme.fontWeight.medium};
            justify-content: center;
            width: fit-content;
            min-width: ${minWidth};

            &:hover {
              background: ${theme.colors.danger.light};
              border-color: ${theme.colors.danger.main};
              color: ${theme.colors.danger.dark};
            }
        `
      case 'ghost':
        return css`
          background: none;
          border: none;
          padding: ${theme.spacing.xs};
          font-size: ${theme.fontSize.xs};
          font-weight: ${theme.fontWeight.regular};

          &:hover {
            color: ${theme.colors.ghost.main};
          }

          img {
            transition: ${theme.transitions.ease};
            transform: ${props.$isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
          }
        `;
      case 'back':
        return css`
          background: none;
          border: none;
          color: ${theme.colors.secondary.dark};
          padding: ${theme.spacing.sm};
          font-size: ${theme.fontSize.md};
          font-weight: ${theme.fontWeight.medium};

          &:hover {
            color: ${theme.colors.ghost.main};
          }
        `;
      case 'close':
        return css`
          background: none;
          border: none;
          padding: ${theme.spacing.sm};
          color: ${theme.colors.secondary.dark};

          &:hover {
            color: ${theme.colors.ghost.main};
          }
        `;
      default:
        return '';
    }
  }}
`
