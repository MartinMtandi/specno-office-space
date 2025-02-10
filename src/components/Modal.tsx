import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
      </Content>
    </Overlay>,
    document.body
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Content = styled.div`
  background: ${({theme}) => theme.colors.background.main};
  padding: ${({theme}) => theme.spacing.xl} ${({theme}) => theme.spacing.lg};
  border-radius: ${({theme}) => theme.layout.borderRadius.sm};
  width: 90%;
  max-width: calc(${({theme}) => theme.layout.maxContentWidth} - ${({theme}) => theme.spacing.xxl});
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({theme}) => theme.shadows.lg};
`
