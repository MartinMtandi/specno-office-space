import { describe, it, expect } from 'vitest'
import {
  capitalizeFirstLetter,
  capitalizeEachWord,
  toLowerCase,
  cleanName,
  isValidName
} from '../stringUtils'

describe('String Utils', () => {
  describe('capitalizeFirstLetter', () => {
    it('capitalizes first letter and lowercases rest', () => {
      expect(capitalizeFirstLetter('hELLo')).toBe('Hello')
      expect(capitalizeFirstLetter('WORLD')).toBe('World')
    })

    it('handles empty string', () => {
      expect(capitalizeFirstLetter('')).toBe('')
    })
  })

  describe('capitalizeEachWord', () => {
    it('capitalizes each word in a string', () => {
      expect(capitalizeEachWord('hello world')).toBe('Hello World')
      expect(capitalizeEachWord('JOHN DOE')).toBe('John Doe')
    })

    it('handles empty string', () => {
      expect(capitalizeEachWord('')).toBe('')
    })
  })

  describe('toLowerCase', () => {
    it('converts string to lowercase', () => {
      expect(toLowerCase('Test@EXAMPLE.com')).toBe('test@example.com')
      expect(toLowerCase('HELLO')).toBe('hello')
    })

    it('handles empty string', () => {
      expect(toLowerCase('')).toBe('')
    })
  })

  describe('cleanName', () => {
    it('removes special characters and numbers', () => {
      expect(cleanName('John123')).toBe('John')
      expect(cleanName('Mary@Smith')).toBe('Mary Smith')
    })

    it('preserves hyphens', () => {
      expect(cleanName('Jean-Paul')).toBe('Jean-Paul')
    })

    it('handles empty string', () => {
      expect(cleanName('')).toBe('')
    })
  })

  describe('isValidName', () => {
    it('validates names with letters only', () => {
      expect(isValidName('John')).toBe(true)
      expect(isValidName('Mary Jane')).toBe(true)
    })

    it('validates names with hyphens', () => {
      expect(isValidName('Jean-Paul')).toBe(true)
    })

    it('rejects invalid names', () => {
      expect(isValidName('John123')).toBe(false)
      expect(isValidName('Mary@Smith')).toBe(false)
    })

    it('handles empty string', () => {
      expect(isValidName('')).toBe(true)
    })
  })
})
