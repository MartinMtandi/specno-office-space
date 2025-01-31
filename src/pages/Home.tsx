import styled from 'styled-components'
import { Typography } from '../components/Typography'
import { Card } from '../components/Card'

export const Home = () => {
  return (
    <>
      <HeaderRow>
        <Typography variant="h1">All Offices</Typography>
      </HeaderRow>
      <Card
        id="1"
        companyName="Specno"
        totalStaff={45}
        officeCapacity={50}
        phoneNumber="+27 82 123 4567"
        emailAddress="hello@specno.com"
        companyAddress="123 Innovation Drive, Tech Park, Cape Town"
        accent="#3B82F6"
      />
    </>
  )
}

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
