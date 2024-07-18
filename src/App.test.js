import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { act } from 'react'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

// Example of using act for asynchronous code
test('example of using act for async operations', async () => {
  await act(async () => {
    render(<App />)
    // Perform asynchronous operations here
  })
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
