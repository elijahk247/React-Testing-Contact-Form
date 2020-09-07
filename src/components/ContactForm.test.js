import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils';


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

  const submitBtn = screen.getByTestId(/submitBtn/i)

  // act: put in the input values
  fireEvent.change(firstName, {target: {value: 'Eli'}})
  console.log(firstName.value)
  fireEvent.change(lastName, {target: {value : 'Kim'}})
  console.log(lastName.value)
  //fireEvent.change(email, {target: {value: 'sunghoonkim247@gmail.com'}})
  console.log(email.value)
  fireEvent.change(message, {target: {value: 'testing an input'}})
  console.log(message.value)

  // assert 
  expect(firstName).toBeInTheDocument()
  expect(firstName.value).toEqual('Eli')
  expect(lastName).toBeInTheDocument()
  expect(email).toBeInTheDocument()
  expect(message).toBeInTheDocument()

  // act('Contact form changes and displays info input the form', () => {
  //   fireEvent.click(submitBtn)
  //   // checking if the data is rendered on the page after submitting the changes
  //   const newData = screen.getByText(/eli/i)
  //   expect(newData).toBeInTheDocument()
  // })

})