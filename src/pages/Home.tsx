import styled from 'styled-components'
import { Typography } from '../components/Typography'
import { Card } from '../components/Card'
import { getOffices } from '../services/officeService'
import { useEffect, useState } from 'react'
import specnoLogo from '../assets/logo/SpecnoLogo_Blue.svg'
import { theme } from '../theme'

const Home = () => {
  const [offices, setOffices] = useState(getOffices())

  useEffect(() => {
    setOffices(getOffices())
  }, [])

  if (offices.length === 0) {
    return (
      <EmptyState>
        <EmptyStateContent>
          <LogoContainer>
            <img src={specnoLogo} alt="Specno Logo" />
          </LogoContainer>
          <Typography variant="h2">No offices found</Typography>
          <Typography>Get started by adding your first office</Typography>
        </EmptyStateContent>
      </EmptyState>
    )
  }

  return (
    <>
      <HeaderRow>
        <Typography variant="h2">All Offices</Typography>
      </HeaderRow>
      {offices.map(office => (
        <Card
          key={office.id}
          id={office.id}
          companyName={office.officeName}
          totalStaff={office.members.length}
          officeCapacity={parseInt(office.capacity)}
          phoneNumber={office.phone}
          emailAddress={office.email}
          companyAddress={office.address}
          accent={office.accent}
        />
      ))}
    </>
  )
}

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 48px);
  color: ${theme.colors.text.muted};
  margin: -${theme.spacing.xl};
`

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.layout.gap.md};
  text-align: center;
  padding: ${theme.spacing.xl};
`

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom:  ${theme.spacing.xl};

  img {
    width: 100%;
    height: auto;
  }
`

export default Home
