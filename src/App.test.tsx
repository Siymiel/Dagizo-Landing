import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders application logo", () => {
  render(<App />);
  const imageElement = screen.getByAltText(/logo/i);
  expect(imageElement).toBeInTheDocument();
});
