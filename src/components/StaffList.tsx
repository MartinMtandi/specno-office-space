import styled from 'styled-components'
import { Typography } from './Typography'
import avatar01 from '../assets/avatars/avatar01.svg'
import avatar02 from '../assets/avatars/avatar02.svg'
import avatar03 from '../assets/avatars/avatar03.svg'
import avatar04 from '../assets/avatars/avatar04.svg'
import avatar05 from '../assets/avatars/avatar05.svg'
import avatar06 from '../assets/avatars/avatar06.svg'
import avatar07 from '../assets/avatars/avatar07.svg'
import { Member } from '../services/officeService'

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
}

export const StaffList = ({ members }: StaffListProps) => {
  return (
    <Container>
      <Header>
        <Typography variant="h2">Staff Members In Office</Typography>
        <Typography variant="body-m">{members.length}</Typography>
      </Header>
      <List>
        {members.map((member) => (
          <ListItem key={member.id}>
            <Avatar 
              src={member.avatar ? avatarMap[member.avatar as keyof typeof avatarMap] : avatarMap.avatar01} 
              alt={`${member.firstName} ${member.lastName}`}
            />
            <MemberInfo>
              <Typography variant="body-m">{member.firstName} {member.lastName}</Typography>
            </MemberInfo>
          </ListItem>
        ))}
      </List>
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
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F8FAFC;
  }
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
