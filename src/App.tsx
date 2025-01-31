import styled from 'styled-components'
import { Typography } from './components/Typography'

const Wrapper = styled.div`
  width: 100%;
  background-color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: hidden;
`

const Container = styled.div`
  max-width: 480px;
  background-color: #F8FAFC;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

function App() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h1">Welcome to Office Space</Typography>
        <Typography variant="body">
          Manage your office space efficiently
        </Typography>
      </Container>
    </Wrapper>
  )
}

export default App
