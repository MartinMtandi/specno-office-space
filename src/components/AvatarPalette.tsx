import styled from 'styled-components'
import { Typography } from './Typography';
import avatar01 from '../assets/avatars/avatar01.svg'
import avatar02 from '../assets/avatars/avatar02.svg'
import avatar03 from '../assets/avatars/avatar03.svg'
import avatar04 from '../assets/avatars/avatar04.svg'
import avatar05 from '../assets/avatars/avatar05.svg'
import avatar06 from '../assets/avatars/avatar06.svg'
import avatar07 from '../assets/avatars/avatar07.svg'

interface AvatarPaletteProps {
  name: string;
  value: string;
  onChange: (avatar: string) => void;
  onBlur?: () => void;
  error?: string;
}

const avatars = [
  { id: 'avatar01', src: avatar01 },
  { id: 'avatar02', src: avatar02 },
  { id: 'avatar03', src: avatar03 },
  { id: 'avatar04', src: avatar04 },
  { id: 'avatar05', src: avatar05 },
  { id: 'avatar06', src: avatar06 },
  { id: 'avatar07', src: avatar07 }
]

export const AvatarPalette = ({ name, value, onChange, onBlur, error }: AvatarPaletteProps) => {

  return (
    <PaletteContainer>
      <Typography color="#000000" variant="h3-semibold">Avatar</Typography>
      <Container>
        {avatars.map((avatar) => (
          <AvatarButton
            key={avatar.id}
            $isSelected={value === avatar.id}
            onClick={() => {
              onChange(avatar.id);
              onBlur?.();
            }}
            type="button"
            name={name}
            aria-label={`Select avatar ${avatar.id}`}
          >
            <AvatarImage src={avatar.src} alt={`Avatar ${avatar.id}`} width={52} height={52} />
          </AvatarButton>
        ))}
      </Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </PaletteContainer>
  )
}

const PaletteContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const AvatarButton = styled.button<{ $isSelected: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid transparent;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.1);
  }

  ${props => props.$isSelected && `
    border: 4px solid #475569;
    background: #f1f5f9;
  `}
`

const AvatarImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px 24px;
  justify-content: center;
  margin-top: 24px;
`

const ErrorMessage = styled.div`
  color: #ef4444;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
`
