import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);

  // act
  // if App renders without crashing, should be able to grab the div className='App'
  const container = screen.getByTestId(/renderapp/i)

  // assert
  // check if the container (div class app) is in the document 
  expect(container).toBeInTheDocument()
});
