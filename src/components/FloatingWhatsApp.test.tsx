import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FloatingWhatsApp from './FloatingWhatsApp.jsx'

describe('FloatingWhatsApp', () => {
  it('renders WhatsApp button with correct href', () => {
    render(<FloatingWhatsApp phoneNumber="1234567890" label="Test Label" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://wa.me/1234567890?text=Namaste%20%F0%9F%99%8F%20I%20want%20to%20book%20a%20pooja.%20Congratulations!%20You%20got%2010%25%20OFF%20%F0%9F%8E%89')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('uses default phone number when not provided', () => {
    render(<FloatingWhatsApp />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toContain('wa.me/918668552465')
  })

  it('has accessible label', () => {
    render(<FloatingWhatsApp label="Custom Label" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label', 'Custom Label')
    expect(link).toHaveAttribute('title', 'Custom Label')
  })
})


