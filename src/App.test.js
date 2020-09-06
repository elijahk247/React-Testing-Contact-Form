import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

  // act
  // if App renders without crashing, should be able to grab the div className='App'
  const container = screen.getByText(/app/i)

  // assert
  // check if the container (div class app) is in the document 
  expect(container).toBeInTheDocument()
});
