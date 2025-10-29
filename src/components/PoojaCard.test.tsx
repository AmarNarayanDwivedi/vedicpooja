import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import PoojaCard from './PoojaCard.jsx'

const sample = {
  name: 'Satyanarayan Puja',
  image: '/mock.jpg',
  reviews: [
    { name: 'A', rating: 5, comment: 'good' },
    { name: 'B', rating: 4, comment: 'ok' },
  ],
  pricing: { basic: 1000 },
}

describe('PoojaCard', () => {
  it('renders title, price and link', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <PoojaCard pooja={sample as any} />
        </LanguageProvider>
      </MemoryRouter>
    )

    expect(screen.getByText('Satyanarayan Puja')).toBeInTheDocument()
    expect(screen.getByText(/₹1,000/)).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/pooja/satyanarayan-puja')
  })

  it('renders button when onBookClick is provided', () => {
    const onBookClick = vi.fn()
    render(
      <MemoryRouter>
        <LanguageProvider>
          <PoojaCard pooja={sample as any} onBookClick={onBookClick} />
        </LanguageProvider>
      </MemoryRouter>
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calculates average rating correctly', () => {
    const poojaWithRatings = {
      ...sample,
      reviews: [
        { name: 'A', rating: 5 },
        { name: 'B', rating: 3 },
      ],
    }

    render(
      <MemoryRouter>
        <LanguageProvider>
          <PoojaCard pooja={poojaWithRatings as any} />
        </LanguageProvider>
      </MemoryRouter>
    )

    expect(screen.getByText('(2)')).toBeInTheDocument()
  })
})


