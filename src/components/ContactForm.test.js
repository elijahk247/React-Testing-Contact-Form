import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ContactForm from './ContactForm'


test('App renders the form inputs', () => {
  render(<ContactForm />)

  // arrange: grab all the form inputs 
  const firstNameInput = screen.getByText(/first name/i)
  //console.log(firstNameInput)
  const lastNameInput = screen.getByText(/last name/i)
  const emailInput = screen.getByText(/email/i)
  const messageInput = screen.getByText(/message/i)

  // assert
  expect(firstNameInput).toBeInTheDocument()
})