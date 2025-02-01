import styled, { keyframes, css } from 'styled-components'
import { Outlet, useNavigate, useLocation, useParams } from 'react-router-dom'
import unionIcon from '../assets/icons/Union.svg'
import { Modal } from '../components/Modal'
import { StaffMemberForm } from '../components/StaffMemberForm'
import { useState, useEffect } from 'react'
import { getOffices, getOfficeById } from '../services/officeService'

export const MainLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const showFloatingButton = location.pathname === '/' || location.pathname.startsWith('/office/') && !location.pathname.endsWith('/new')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shouldPulse, setShouldPulse] = useState(false)

  useEffect(() => {
    if (location.pathname === '/') {
      setShouldPulse(getOffices().length === 0)
    } else if (id) {
      const office = getOfficeById(id)
      setShouldPulse(office?.members.length === 0)
    } else {
      setShouldPulse(false)
    }
  }, [location.pathname, id])

  const handleFloatingButtonClick = () => {
    if (location.pathname === '/') {
      navigate('/office/new')
    } else {
      setIsModalOpen(true)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    setIsModalOpen(false)
  }

  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
      {showFloatingButton && (
        <>
          <FloatingButton onClick={handleFloatingButtonClick} $shouldPulse={shouldPulse}>
            <img src={unionIcon} alt="Add" width={20} height={20} />
          </FloatingButton>
          <Modal isOpen={isModalOpen} onClose={handleModalClose}>
            <StaffMemberForm 
              onClose={handleModalClose}
              onSave={handleSave}
            />
          </Modal>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #E5E5E5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
`

const Container = styled.div`
  max-width: 412px;
  width: 100%;
  background-color: #F8FAFC;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
  padding: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(72, 157, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(72, 157, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(72, 157, 218, 0);
  }
`

const FloatingButton = styled.button<{ $shouldPulse: boolean }>`
  position: absolute;
  bottom: 20px;
  right: calc(50% - 190px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #0D4477;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${props => props.$shouldPulse ? css`${pulseAnimation} 2s infinite` : 'none'};

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
  }
`
