import { useParams } from 'react-router-dom'

export const Office = () => {
  const { id } = useParams()

  return (
    <>
      Office Page - ID: {id}
    </>
  )
}
