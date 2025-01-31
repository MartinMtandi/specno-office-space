import styled from 'styled-components'
import { Typography } from './components/Typography'
import { Card } from './components/Card'

function App() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h1">All Offices</Typography>
        <Card
          companyName="Specno"
          totalStaff={45}
          officeCapacity={50}
          phoneNumber="+27 82 123 4567"
          emailAddress="hello@specno.com"
          companyAddress="123 Innovation Drive, Tech Park, Cape Town"
          accent="#3B82F6"
        />
      </Container>
    </Wrapper>
  )
}

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
  gap: 24px;
  min-height: calc(100vh - 16px);
  padding: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

export default App
