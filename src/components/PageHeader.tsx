import styled from 'styled-components'
import { Typography } from './Typography'
import { Button } from './Button'
import arrowLeft from '../assets/icons/arrow-left.svg'
import { useNavigate } from 'react-router-dom'

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export const PageHeader = ({ title, onBack }: PageHeaderProps) => {
  const navigate = useNavigate()
  
  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }

  return (
    <HeaderRow>
      <Button 
        className="back-button"
        variant="back"
        onClick={handleBack}
        icon={arrowLeft}
      />
      <Typography variant="sub-heading">{title}</Typography>
    </HeaderRow>
  )
}

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  margin-bottom: 2rem;

  .back-button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
