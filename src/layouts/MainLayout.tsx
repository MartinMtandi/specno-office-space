import styled from 'styled-components'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import unionIcon from '../assets/Union.svg'
import { Modal } from '../components/Modal'
import { StaffMemberForm } from '../components/StaffMemberForm'
import { useState } from 'react'

export const MainLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const showFloatingButton = location.pathname === '/' || location.pathname.startsWith('/office/') && !location.pathname.endsWith('/new')
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <FloatingButton onClick={handleFloatingButtonClick}>
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

const FloatingButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: calc(50% - 190px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #3B82F6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  z-index: 10;

  &:hover {
    background: #2563EB;
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 560px) {
    right: 40px;
  }
`
