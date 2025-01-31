import styled from 'styled-components'
import { Typography } from '../components/Typography'
import { Card } from '../components/Card'
import { getOffices } from '../services/officeService'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [offices, setOffices] = useState(getOffices())

  useEffect(() => {
    setOffices(getOffices())
  }, [])

  if (offices.length === 0) {
    return (
      <EmptyState>
        <Typography>No offices found</Typography>
      </EmptyState>
    )
  }

  return (
    <>
      <HeaderRow>
        <Typography variant="h1">All Offices</Typography>
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
`

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  color: #6b7280;
`
