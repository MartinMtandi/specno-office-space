import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const StyledInput = styled.input<{ $hasIcon?: boolean; $iconPosition?: 'left' | 'right' }>`
  padding: 16px;
  padding-${props => props.$iconPosition}: ${props => props.$hasIcon ? '40px' : '16px'};
  border: 1px solid #FFF;
  border-radius: 8px;
  font-size: 16px;
  color: #334155;
  background: white;
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: #E2E8F0;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #94A3B8;
  }

  &:disabled {
    background: #F1F5F9;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    border-color: #CBD5E1;
  }
`

const ErrorText = styled.span`
  color: #EF4444;
  font-size: 14px;
  margin-top: 4px;
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
  ${props => props.$position}: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94A3B8;
  width: 16px;
  height: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

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
