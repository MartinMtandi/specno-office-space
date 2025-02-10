import React from 'react'
import styled from 'styled-components'
import { Office as OfficeType } from '../services/officeService'
import { Card } from './Card'
import { Input } from './Input'
import searchIcon from '../assets/icons/Search.svg'

interface OfficeViewProps {
  office: OfficeType
  searchQuery: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const OfficeView: React.FC<OfficeViewProps> = ({ office, searchQuery, onSearch }) => {
  return (
    <>
      <Card
        id={office.id}
        companyName={office.officeName}
        totalStaff={office.members.length}
        officeCapacity={parseInt(office.capacity)}
        phoneNumber={office.phone}
        emailAddress={office.email}
        companyAddress={office.address}
        accent={office.accent}
      />
      {office.members.length > 0 && (
        <SearchContainer>
          <Input
            name="search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={onSearch}
            icon={<img src={searchIcon} alt="Search" />}
            iconPosition="right"
          />
        </SearchContainer>
      )}
    </>
  )
}

const SearchContainer = styled.div`
  width: 100%;
  max-width: ${({theme}) => theme.layout.maxContentWidth};
`
