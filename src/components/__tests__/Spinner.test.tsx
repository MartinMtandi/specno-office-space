import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Spinner } from '../Spinner'

describe('Spinner', () => {
  it('renders without crashing', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('contains two divs for container and spinner', () => {
    const { container } = render(<Spinner />)
    const spinnerContainer = container.firstChild as HTMLElement
    const spinnerCircle = container.querySelector('div > div')

    expect(spinnerContainer).toBeInTheDocument()
    expect(spinnerCircle).toBeInTheDocument()
  })
})
