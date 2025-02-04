import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'

// Mock the lazy-loaded components
vi.mock('../pages/Home', () => ({
  default: () => <div>Home Page</div>
}))

vi.mock('../pages/Office', () => ({
  default: () => <div>Office Page</div>
}))

vi.mock('../pages/OfficeFormPage', () => ({
  default: () => <div>Office Form Page</div>
}))

// Mock react-router-dom
vi.mock('react-router-dom')

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })
})
