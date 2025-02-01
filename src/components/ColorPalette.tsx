import styled from 'styled-components'
import { Typography } from './Typography';

interface ColorPaletteProps {
  name: string;
  value: string;
  onChange: (color: string) => void;
  onBlur?: () => void;
  error?: string;
}

const colors = [
  '#FFBE0B',
  '#FF9B71',
  '#FB5607',
  '#97512C',
  '#DBBADD',
  '#FF006E',
  '#A9F0D1',
  '#00B402',
  '#489DDA',
  '#0072E8',
  '#8338EC'
]

export const ColorPalette = ({ name, value = '#FFBE0B', onChange, onBlur }: ColorPaletteProps) => {
  return (
    <PaletteContainer>
      <Typography variant="h1">Office Colour</Typography>
      <Container>
        {colors.map((color) => (
          <ColorButton
            key={color}
            $color={color}
            $isSelected={value === color}
            onClick={() => {
              onChange(color);
              onBlur?.();
            }}
            type="button"
            name={name}
            aria-label={`Select color ${color}`}
          />
        ))}
      </Container>
    </PaletteContainer>
  )
}

const PaletteContainer = styled.div`
  margin-top: 20px;
`

const ColorButton = styled.button<{ $color: string; $isSelected: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  border: none;
  background-color: ${props => props.$color};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.1);
  }

  ${props => props.$isSelected && `
    border: 4px solid #475569;
    border-radius: 36px;
  `}
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px 24px;
  justify-content: center;
  margin-top: 24px;
`