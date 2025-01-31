import styled from 'styled-components'
import { Office } from '../services/officeService'
import { Typography } from './Typography'
import { useNavigate } from 'react-router-dom'

interface OfficeCardProps {
  office: Office
}

export const OfficeCard = ({ office }: OfficeCardProps) => {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`/office/${office.id}`)} $accent={office.accent}>
      <CardContent>
        <Typography variant="h2">{office.officeName}</Typography>
        <InfoSection>
          <InfoItem>
            <Label>Address:</Label>
            <Value>{office.address}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Email:</Label>
            <Value>{office.email}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Phone:</Label>
            <Value>{office.phone}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Capacity:</Label>
            <Value>{office.capacity}</Value>
          </InfoItem>
        </InfoSection>
        <MembersSection>
          <Label>Members:</Label>
          <Value>{office.members.length}</Value>
        </MembersSection>
      </CardContent>
    </Card>
  )
}

const Card = styled.div<{ $accent: string }>`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  border-top: 4px solid ${props => props.$accent};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const InfoSection = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
`

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
`

const MembersSection = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
`

const Label = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`

const Value = styled.span`
  color: #111827;
  font-size: 0.875rem;
`
