import styled from 'styled-components'
import { theme } from '../theme'

interface AccentProps {
  color: string;
}

const AccentSection = styled.div<AccentProps & { opacity: number }>`
  flex: 1;
  background-color: ${props => props.color};
  opacity: ${props => props.opacity};
`

export const Accent = ({ color }: AccentProps) => {
  return (
    <AccentContainer>
      <AccentSection color={color} opacity={1} />
      <AccentSection color={color} opacity={0.8} />
      <AccentSection color={color} opacity={0.6} />
    </AccentContainer>
  )
}

const AccentContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top-left-radius: ${theme.layout.borderRadius.sm};
  border-bottom-left-radius: ${theme.layout.borderRadius.sm};
`
