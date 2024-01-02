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

test("testing for inpu Box", () => {
  render(<App />);
  let type = screen.getByRole("textbox");
  let placeholder = screen.getByPlaceholderText("Enter User Name");
  expect(type).toBeInTheDocument();
  expect(placeholder).toBeInTheDocument();
  expect(type).toHaveAttribute("name", "username");
  expect(type).toHaveAttribute("type", "text");
});

describe("UI Based Testing", () => {
  test("testing for inpu Box", () => {
    render(<App />);
    let type = screen.getByRole("textbox");
    expect(type).toHaveAttribute("name", "username");
  });

  test("testing for inpu Box", () => {
    render(<App />);
    let placeholder = screen.getByPlaceholderText("Enter User Name");
    expect(placeholder).toBeInTheDocument();
  });
});
// describe.only  ---- testing for only this case
// describe.skip  ---- testing for skip this case
