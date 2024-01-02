import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing for text", () => {
  render(<App />);
  const text = screen.getByText(/learn react123/i);
  expect(text).toBeInTheDocument();
});

test("testing for Image Title", () => {
  render(<App />);
  const title = screen.getByTitle("React logo");
  expect(title).toBeInTheDocument();
});
