import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ContactForm from './ContactForm'


test('App renders the form inputs', () => {
  render(<ContactForm />)

  // arrange 
  //const firstNameInput = screen.getByLabelText(/firstname/i)
  //const lastNameInput = screen.getByLabelText(/lastname/i)
  //const emailInput = screen.getByLabelText(/email/i)
  //const messageInput = screen.getByLabelText(/message/i)
})