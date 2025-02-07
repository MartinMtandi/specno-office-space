import { Button } from './Button'
import closeIcon from '../assets/icons/close-circle.svg'

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <Button
      variant="close"
      onClick={onClick}
      icon={closeIcon}
    />
  )
}
