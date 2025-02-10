import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import Home from '../Home'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

// Mock dependencies
vi.mock('../../services/officeService', () => ({
  getOffices: vi.fn().mockReturnValue([])
}))

// Mock react-router-dom
vi.mock('react-router-dom')

describe('Home', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
    expect(container).toBeDefined()
  })
})
