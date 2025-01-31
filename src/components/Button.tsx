import styled from 'styled-components'

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isRotated?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'back' | 'close';
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

interface StyledButtonProps {
  $isRotated?: boolean;
  $variant: ButtonProps['variant'];
}

const ButtonContainer = styled.button<StyledButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  font-family: inherit;
  
  ${props => {
    switch (props.$variant) {
      case 'primary':
        return `
          background: #489DDA;
          border: none;
          color: white;
          padding: 16px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          justify-content: center;
          width: fit-content;
          min-width: 200px;

          &:hover {
            background: #3B7FB5;
          }
        `;
      case 'secondary':
        return `
          background: white;
          border: 1px solid #E2E8F0;
          color: #64748B;
          padding: 16px;
          text-transform: uppercase;
          border-radius: 100px;
          font-weight: 500;
          font-size: 14px;
          justify-content: center;

          &:hover {
            background: #F1F5F9;
            border-color: #CBD5E1;
          }
        `;
      case 'ghost':
        return `
          background: none;
          border: none;
          color: #64748B;
          padding: 8px;
          font-size: 14px;
          font-weight: 500;

          &:hover {
            color: #334155;
          }

          img {
            transition: transform 0.3s ease;
            transform: ${props.$isRotated ? 'rotate(0deg)' : 'rotate(180deg)'};
          }
        `;
      case 'back':
        return `
          background: none;
          border: none;
          color: #64748B;
          padding: 8px;
          font-size: 16px;
          font-weight: 500;

          &:hover {
            color: #334155;
          }
        `;
      case 'close':
        return `
          background: none;
          border: none;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            opacity: 0.8;
          }
        `;
      default:
        return `
          background: none;
          border: none;
          padding: 8px;
        `;
    }
  }}
`

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
      {children || (
        <>
          {text}
          {icon && <img src={icon} alt={text || 'button icon'} />}
        </>
      )}
    </ButtonContainer>
  )
}
