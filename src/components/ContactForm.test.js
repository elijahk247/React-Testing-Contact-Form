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
});

test('can submit the input values', () => {
  render(<ContactForm />)

  // arrange: grab the inputs
  const firstName = screen.getByPlaceholderText(/edd/i)
  const lastName = screen.getByPlaceholderText(/burke/i)
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
  const message = screen.getByPlaceholderText(/add a note/i)

  // act: put in the input values
  fireEvent.change(firstName, {target: {value: 'Eli'}})
  //console.log(firstName)
  //fireEvent.change(lastName, {target: {value : 'Kim'}})
  //fireEvent.change(email, {target: {value: 'sunghoonkim247@gmail.com'}})
  //fireEvent.change(message, {target: {value: 'testing an input'}})

  // assert 
  //const newData = screen.getByText('Eli')
  expect(firstName).toBeInTheDocument()
  expect(firstName.textContent).toEqual('Eli')
})