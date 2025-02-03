import styled, { keyframes } from 'styled-components'
import { theme } from '../theme'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${theme.colors.secondary.light};
  border-top: 3px solid ${theme.colors.primary.main};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  )
}
