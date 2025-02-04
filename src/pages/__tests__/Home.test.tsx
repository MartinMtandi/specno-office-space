import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../Home'

// Mock dependencies
vi.mock('../../services/officeService', () => ({
  getOffices: vi.fn().mockReturnValue([])
}))

// Mock react-router-dom
vi.mock('react-router-dom')

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />)
    expect(container).toBeDefined()
  })
})
