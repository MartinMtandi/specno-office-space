import styled from 'styled-components'
import { Typography } from './Typography'
import emailIcon from '../assets/Email.svg'
import locationIcon from '../assets/location.svg'
import peopleIcon from '../assets/people.svg'
import capacityIcon from '../assets/capacity.svg'
import phoneIcon from '../assets/Phone.svg'
import arrowDownIcon from '../assets/arrow-down.svg'
import editIcon from '../assets/Edit.svg'
import { Button } from './Button'
import { useState } from 'react'

interface CardProps {
  companyName: string;
  totalStaff: number;
  phoneNumber: string;
  emailAddress: string;
  officeCapacity: number;
  companyAddress: string;
  accent: string;
  onClick?: () => void;
}

export const Card = ({ 
  companyName,
  totalStaff,
  phoneNumber,
  emailAddress,
  officeCapacity,
  companyAddress,
  accent,
  onClick 
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer borderColor={accent} onClick={onClick}>
      <HeaderRow>
        <Typography variant="h2">{companyName}</Typography>
        <EditIcon src={editIcon} alt="Edit" />
      </HeaderRow>
      <InfoRow>
        <img src={peopleIcon} alt="people" width={20} height={20} />
        <Typography variant="body"><b>{totalStaff}</b> Staff Members in Office</Typography>
      </InfoRow>
      <Divider />
      <ButtonWrapper>
        <Button 
          text="More info" 
          icon={arrowDownIcon} 
          onClick={toggleExpand}
          isRotated={isExpanded}
        />
      </ButtonWrapper>
      <ExpandableContent $isExpanded={isExpanded}>
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

const CardContainer = styled.div<{ borderColor: string }>`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 20px 20px 0 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: 12px solid ${props => props.borderColor};

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

const EditIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E2E8F0;
  margin: 4px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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
