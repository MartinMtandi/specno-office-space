import { describe, it, expect } from 'vitest'
import { theme } from '../index'

describe('Theme', () => {
  it('has the correct structure', () => {
    expect(theme).toBeDefined()
    expect(typeof theme).toBe('object')
  })

  it('has primary colors defined', () => {
    expect(theme.colors.primary).toBeDefined()
    expect(theme.colors.primary.main).toBeDefined()
    expect(theme.colors.primary.dark).toBeDefined()
    expect(theme.colors.primary.light).toBeDefined()
  })

  it('has secondary colors defined', () => {
    expect(theme.colors.secondary).toBeDefined()
    expect(theme.colors.secondary.main).toBeDefined()
    expect(theme.colors.secondary.dark).toBeDefined()
    expect(theme.colors.secondary.light).toBeDefined()
  })
})
