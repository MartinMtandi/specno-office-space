import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Input = ({ error, icon, iconPosition = 'left', ...props }: InputProps) => {
  return (
    <InputContainer>
      <InputWrapper>
        {icon && <IconWrapper $position={iconPosition}>{icon}</IconWrapper>}
        <StyledInput $hasIcon={!!icon} $iconPosition={iconPosition} {...props} />
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}

const StyledInput = styled.input<{ $hasIcon?: boolean; $iconPosition?: 'left' | 'right' }>`
  padding: ${({theme}) => theme.spacing.lg};
  padding-${props => props.$iconPosition}: ${props => props.$hasIcon ? '40px' : '16px'};
  border: 1px solid ${({theme}) => theme.colors.white};
  border-radius: ${({theme}) => theme.layout.borderRadius.sm};
  font-size: ${({theme}) => theme.fontSize.md};
  color: ${({theme}) => theme.colors.ghost.main};
  background: ${({theme}) => theme.colors.white};
  width: 100%;
  transition: ${({theme}) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({theme}) => theme.colors.border.main};
    box-shadow: ${({theme}) => theme.shadows.input};
  }

  &::placeholder {
    color: ${({theme}) => theme.colors.ghost.light};
  }

  &:disabled {
    background: ${({theme}) => theme.colors.secondary.light};
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    border-color: ${({theme}) => theme.colors.secondary.main};
  }
`

const ErrorText = styled.span`
  color: ${({theme}) => theme.colors.danger.main};
  font-size: ${({theme}) => theme.fontSize.sm};
  margin-top: ${({theme}) => theme.spacing.xs};
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div<{ $position?: 'left' | 'right' }>`
  position: absolute;
  ${props => props.$position}: ${({theme}) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.ghost.light};
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
