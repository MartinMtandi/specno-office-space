import styled from 'styled-components'
import { Typography } from './Typography'
import emailIcon from '../assets/icons/Email.svg'
import locationIcon from '../assets/icons/location.svg'
import peopleIcon from '../assets/icons/people.svg'
import capacityIcon from '../assets/icons/capacity.svg'
import phoneIcon from '../assets/icons/Phone.svg'
import arrowDownIcon from '../assets/icons/arrow-down.svg'
import editIcon from '../assets/icons/Edit.svg'
import { Button } from './Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Accent } from './Accent'

interface CardProps {
  id: string
  companyName: string;
  totalStaff: number;
  phoneNumber: string;
  emailAddress: string;
  officeCapacity: number;
  companyAddress: string;
  accent: string;
}

export const Card = ({
  id,
  companyName,
  totalStaff,
  phoneNumber,
  emailAddress,
  officeCapacity,
  companyAddress,
  accent
}: CardProps) => {
  const navigate = useNavigate()
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer>
      <Accent color={accent} />
      <HeaderRow>
        <Typography variant="h3">{companyName}</Typography>
        <EditButton onClick={(e) => {
          e.stopPropagation();
          navigate(`/office/${id}?mode=edit`);
        }}>
          <img src={editIcon} alt="Edit" />
        </EditButton>
      </HeaderRow>
      <InfoRow onClick={() => navigate(`/office/${id}`)}>
        <img src={peopleIcon} alt="people" width={20} height={20} />
        <Typography variant="body"><b>{totalStaff}</b> Staff Members in Office</Typography>
      </InfoRow>
      <ButtonWrapper>
        <Button 
          text="More info" 
          icon={arrowDownIcon} 
          onClick={toggleExpand}
          isRotated={isExpanded}
        />
      </ButtonWrapper>
      <ExpandableContent $isExpanded={isExpanded} onClick={() => navigate(`/office/${id}`)}>
        <InfoRow>
          <img src={phoneIcon} alt="Phone" width={20} height={20} />
          <Typography variant="body">{phoneNumber}</Typography>
        </InfoRow>
        <InfoRow>
          <img src={emailIcon} alt="Email" width={20} height={20} />
          <Typography variant="body">{emailAddress}</Typography>
        </InfoRow>
        <InfoRow>
          <img src={capacityIcon} alt="Capacity" width={20} height={20} />
          <Typography variant="body">Office Capacity: {officeCapacity}</Typography>
        </InfoRow>
        <InfoRow>
          <img src={locationIcon} alt="Location" width={20} height={20} />
          <Typography variant="body">{companyAddress}</Typography>
        </InfoRow>
      </ExpandableContent>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 20px 20px 0 28px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    opacity: 0.6;
  }
`

const EditButton = styled.button`
  width: 20px;
  height: 20px;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #E2E8F0;
  padding-top: 8px;

  img {
    transition: transform 0.2s ease-in-out;
  }
`

const ExpandableContent = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  padding-bottom: ${props => props.$isExpanded ? '20px' : '0'};
  max-height: ${props => props.$isExpanded ? '500px' : '0'};
  opacity: ${props => props.$isExpanded ? '1' : '0'};
  transition: all 0.3s ease-in-out;
`
