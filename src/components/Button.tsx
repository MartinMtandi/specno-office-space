import styled, { css } from 'styled-components'
import { memo } from 'react'

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
  disabled?: boolean;
}

interface StyledButtonProps {
  $isRotated?: boolean;
  $variant: ButtonProps['variant'];
}

const minWidth = "200px";

const areEqual = (prevProps: ButtonProps, nextProps: ButtonProps) => {
  return (
    prevProps.text === nextProps.text &&
    prevProps.icon === nextProps.icon &&
    prevProps.isRotated === nextProps.isRotated &&
    prevProps.variant === nextProps.variant &&
    prevProps.children === nextProps.children &&
    prevProps.type === nextProps.type &&
    prevProps.className === nextProps.className &&
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
  )
}

export const Button = memo(({ 
  text, 
  icon, 
  onClick, 
  isRotated, 
  variant = 'ghost', 
  children,
  type = 'button',
  className,
  style,
  disabled
}: ButtonProps) => {
  return (
    <ButtonContainer 
      onClick={onClick}
      $isRotated={isRotated}
      $variant={variant}
      type={type}
      className={className}
      style={style}
      disabled={disabled}
    >
      {text || children}
      {icon && <img src={icon} alt="" width={20} height={20} />}
    </ButtonContainer>
  )
}, areEqual)

const ButtonContainer = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.layout.gap.xs};
  text-align: center;
  font-family: inherit;
  transition: ${({theme}) => theme.transitions.default};
  color: ${({theme}) => theme.colors.text.secondary};

  ${props => {
    switch (props.$variant) {
      case 'primary':
        return css`
          background: ${({theme}) => theme.colors.primary.main};
          border: 1px solid transparent;
          color: ${({theme}) => theme.colors.white};
          padding: ${({theme}) => theme.layout.padding.button};
          border-radius: ${({theme}) => theme.layout.borderRadius.full};
          font-size: ${({theme}) => theme.fontSize.sm};
          font-weight: ${({theme}) => theme.fontWeight.medium};
          text-transform: uppercase;
          justify-content: center;
          width: fit-content;
          min-width: ${minWidth};

          &:hover {
            background: ${({theme}) => theme.colors.primary.light};
            border-color: ${({theme}) => theme.colors.primary.main};
            color: ${({theme}) => theme.colors.text.primary};
          }
        `
      case 'secondary':
        return css`
          background: transparent;
          border: 1px solid transparent;
          color: ${({theme}) => theme.colors.primary.main};
          padding: ${({theme}) => theme.layout.padding.button};
          text-transform: uppercase;
          border-radius: ${({theme}) => theme.layout.borderRadius.full};
          font-size: ${({theme}) => theme.fontSize.sm};
          font-weight: ${({theme}) => theme.fontWeight.medium};
          justify-content: center;

          &:hover {
            background: ${({theme}) => theme.colors.secondary.light};
            border-color: ${({theme}) => theme.colors.secondary.main};
            color: ${({theme}) => theme.colors.secondary.dark};
          }
        `
      case 'danger':
        return css`
          background: ${({theme}) => theme.colors.danger.main};
          border: 1px solid transparent;
          color: ${({theme}) => theme.colors.white};
          padding: ${({theme}) => theme.layout.padding.button};
          text-transform: uppercase;
          border-radius: ${({theme}) => theme.layout.borderRadius.full};
          font-size: ${({theme}) => theme.fontSize.sm};
          font-weight: ${({theme}) => theme.fontWeight.medium};
          justify-content: center;
          width: fit-content;
          min-width: ${minWidth};

          &:hover {
              background: ${({theme}) => theme.colors.danger.light};
              border-color: ${({theme}) => theme.colors.danger.main};
              color: ${({theme}) => theme.colors.danger.dark};
          }
        `;
      case 'warning':
          return css`
            background: transparent;
            border: 1px solid transparent;
            color: ${({theme}) => theme.colors.primary.main};
            padding: ${({theme}) => theme.layout.padding.button};
            text-transform: uppercase;
            border-radius: ${({theme}) => theme.layout.borderRadius.full};
            font-size: ${({theme}) => theme.fontSize.sm};
            font-weight: ${({theme}) => theme.fontWeight.medium};
            justify-content: center;
            width: fit-content;
            min-width: ${minWidth};

            &:hover {
              background: ${({theme}) => theme.colors.danger.light};
              border-color: ${({theme}) => theme.colors.danger.main};
              color: ${({theme}) => theme.colors.danger.dark};
            }
        `
      case 'ghost':
        return css`
          background: none;
          border: none;
          padding: ${({theme}) => theme.spacing.xs};
          font-size: ${({theme}) => theme.fontSize.xs};
          font-weight: ${({theme}) => theme.fontWeight.regular};

          &:hover {
            color: ${({theme}) => theme.colors.ghost.main};
          }

          img {
            transition: ${({theme}) => theme.transitions.ease};
            transform: ${props.$isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
          }
        `;
      case 'back':
        return css`
          background: none;
          border: none;
          color: ${({theme}) => theme.colors.secondary.dark};
          padding: ${({theme}) => theme.spacing.sm};
          font-size: ${({theme}) => theme.fontSize.md};
          font-weight: ${({theme}) => theme.fontWeight.medium};

          &:hover {
            color: ${({theme}) => theme.colors.ghost.main};
          }
        `;
      case 'close':
        return css`
          background: none;
          border: none;
          padding: ${({theme}) => theme.spacing.sm};
          color: ${({theme}) => theme.colors.secondary.dark};

          &:hover {
            color: ${({theme}) => theme.colors.ghost.main};
          }
        `;
      default:
        return '';
    }
  }}
`
