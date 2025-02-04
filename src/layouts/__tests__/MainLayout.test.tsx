import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { MainLayout } from '../MainLayout'

// Mock react-router-dom
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
  useNavigate: () => vi.fn(),
  useSearchParams: () => [new URLSearchParams(), vi.fn()],
  Outlet: () => <div data-testid="outlet">Outlet Content</div>,
  useLocation: () => ({ pathname: '/' })
}))

describe('MainLayout', () => {
  it('renders without crashing', () => {
    const { container } = render(<MainLayout />)
    expect(container).toBeDefined()
  })
})
