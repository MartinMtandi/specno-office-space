import styled from 'styled-components'
import { Typography } from './Typography'
import avatar01 from '../assets/avatars/avatar01.svg'
import avatar02 from '../assets/avatars/avatar02.svg'
import avatar03 from '../assets/avatars/avatar03.svg'
import avatar04 from '../assets/avatars/avatar04.svg'
import avatar05 from '../assets/avatars/avatar05.svg'
import avatar06 from '../assets/avatars/avatar06.svg'
import avatar07 from '../assets/avatars/avatar07.svg'
import moreDots from '../assets/icons/more-dots.svg'
import { Member } from '../services/officeService'
import { StaffMemberActions } from './StaffMemberActions'
import { useState } from 'react'

const avatarMap = {
  avatar01,
  avatar02,
  avatar03,
  avatar04,
  avatar05,
  avatar06,
  avatar07
}

interface StaffListProps {
  members: Member[]
  onEditMember: (member: Member) => void
  onDeleteMember: (member: Member) => void
}

export const StaffList = ({ members, onEditMember, onDeleteMember }: StaffListProps) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <Container>
      <Header>
        <Typography variant="h3-semibold">Staff Members In Office</Typography>
        <Typography variant="body-m">{members.length}</Typography>
      </Header>
      <List>
        {members.map((member) => (
          <ListItem key={member.id}>
            <LeftContent>
              <Avatar 
                src={member.avatar ? avatarMap[member.avatar as keyof typeof avatarMap] : avatarMap.avatar01} 
                alt={`${member.firstName} ${member.lastName}`}
              />
              <MemberInfo>
                <Typography variant="body-m">{member.firstName} {member.lastName}</Typography>
              </MemberInfo>
            </LeftContent>
            <MoreButton onClick={() => setSelectedMember(member)}>
              <img src={moreDots} alt="More options" width={24} height={24} />
            </MoreButton>
          </ListItem>
        ))}
      </List>
      {selectedMember && (
        <StaffMemberActions
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
          onEdit={onEditMember}
          onDelete={onDeleteMember}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F8FAFC;
  }
`

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const MoreButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E2E8F0;
  }

  img {
    display: block;
  }
`
