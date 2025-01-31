import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const StyledInput = styled.input`
  padding: 16px;
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

export const Input = ({ error, ...props }: InputProps) => {
  return (
    <InputContainer>
      <StyledInput {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}
