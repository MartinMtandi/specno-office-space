import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from './Typography'
import { Button } from './Button'
import { Input } from './Input'
import { ColorPalette } from './ColorPalette'
import arrowLeftIcon from '../assets/arrow-left.svg'
import { useState } from 'react'

interface NewOfficeFormProps {
  onSave: () => void;
}

export const NewOfficeForm = ({ onSave }: NewOfficeFormProps) => {
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState('#FF8A65')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave()
  }

  return (
    <>
      <HeaderRow>
        <Button 
          className="back-button"
          variant="back"
          onClick={() => navigate('/')}
          icon={arrowLeftIcon}
        />
        <Typography variant="h2">New Office</Typography>
      </HeaderRow>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Office Name"
          required
        />
        <Input
          type="text"
          placeholder="Physical Address"
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          required
        />
        <Input
          type="tel"
          placeholder="Phone Number"
          required
        />
        <Input
          placeholder="Maximum Capacity"
          required
        />
        <ColorPalette
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
        <ButtonWrapper>
          <Button
            variant="primary"
            type="submit"
            text="Add Office"
          />
        </ButtonWrapper>
      </Form>
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  padding: 0 24px;

  .back-button {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 412px;
  width: 100%;
  margin: 0 auto;
`
