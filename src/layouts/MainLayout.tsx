import styled, { keyframes, css } from 'styled-components'
import { Outlet, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import unionIcon from '../assets/icons/Union.svg'
import { Modal } from '../components/Modal'
import { StaffMemberForm } from '../components/StaffMemberForm'
import { useState, useEffect } from 'react'
import { getOffices, getOfficeById, Office } from '../services/officeService'
import { theme } from '../theme'

export const MainLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const isEditMode = searchParams.get('mode') === 'edit'
  const showFloatingButton = (location.pathname === '/' || location.pathname.startsWith('/office/')) && !location.pathname.endsWith('/new') && !isEditMode
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shouldPulse, setShouldPulse] = useState(false)
  const [currentOffice, setCurrentOffice] = useState<Office | null>(null)

  useEffect(() => {
    if (location.pathname === '/') {
      setShouldPulse(getOffices().length === 0)
      setCurrentOffice(null)
      return
    }
    
    if (!id) {
      setShouldPulse(false)
      setCurrentOffice(null)
      return
    }

    const updateOfficeData = () => {
      const office = getOfficeById(id)
      setShouldPulse(office?.members.length === 0)
      setCurrentOffice(office || null)
    }

    updateOfficeData()

  }, [location.pathname, id])

  const handleFloatingButtonClick = () => {
    if (location.pathname === '/') {
      navigate('/office/new')
    } else if (currentOffice) {
      setIsModalOpen(true)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleSave = () => {
    if (id) {
      const updatedOffice = getOfficeById(id)
      setCurrentOffice(updatedOffice || null)
      window.dispatchEvent(new Event('officeUpdated'))
    }
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
          {currentOffice && (
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
              <StaffMemberForm 
                onClose={handleModalClose}
                onSubmit={handleSave}
                office={currentOffice}
              />
            </Modal>
          )}
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: ${theme.colors.background.secondary};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
`

const Container = styled.div`
  max-width: ${theme.layout.maxContentWidth};
  width: 100%;
  background-color: ${theme.colors.background.main};
  display: flex;
  flex-direction: column;
  gap: ${theme.layout.gap.lg};
  min-height: 100vh;
  padding: ${theme.layout.padding.page};
  box-shadow: ${theme.shadows.md};
  box-sizing: border-box;
  position: relative;
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
  right: max(20px, calc((100% - ${theme.layout.maxContentWidth}) / 2 + 20px));
  width: 56px;
  height: 56px;
  border-radius: ${theme.layout.borderRadius.full};
  background: ${theme.colors.primary.dark};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${theme.transitions.default};
  box-shadow: ${theme.shadows.button};
  animation: ${props => props.$shouldPulse ? css`${pulseAnimation} 2s infinite` : 'none'};

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 20px;
    height: 20px;
  }
`
