import { useState, useEffect } from 'react'
import { getOfficeById, Office as OfficeType } from '../services/officeService'

export const useOffice = (id: string | undefined) => {
  const [office, setOffice] = useState<OfficeType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  
  useEffect(() => {
    if (id) {
      const officeData = getOfficeById(id)
      if (officeData) {
        setOffice(officeData)
      }
    }
  }, [id, lastUpdate])

  // Office update listener
  useEffect(() => {
    const handleOfficeUpdate = () => setLastUpdate(Date.now())
    window.addEventListener('officeUpdated', handleOfficeUpdate)
    return () => window.removeEventListener('officeUpdated', handleOfficeUpdate)
  }, [])

  return { office, setOffice, error, setError, lastUpdate, setLastUpdate }
}
