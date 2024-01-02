import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing for text", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react123/i);
  expect(linkElement).toBeInTheDocument();
});
