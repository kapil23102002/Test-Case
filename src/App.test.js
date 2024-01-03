// // we can create test files like this ----
// (1) app.test.js
// (2) app.test.jsx
// (3) app.spec.js
// (4) app.spec.jsx

// // we can do All test file are keep in their on folder and the folder name is and without the name of test.js ---
// //(1) __tests__

import { fireEvent, render, screen } from "@testing-library/react";
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

// // Before hooks --

// beforeAll(() => {
//   console.log("*****Before All Hooks ****");
// });

// beforeEach(() => {
//   console.log("*****Before Each Hooks ****");
// });

test("testing for onChange event", () => {
  console.log("1st Test Case");
  render(<App />);
  let event = screen.getByRole("textbox");
  fireEvent.change(event, { target: { value: "kapil" } });
  expect(event.value).toBe("kapil");
});

test("testing for onClick event", () => {
  console.log("2nd Test Case");
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});

// // After hooks --

// AfterAll(() => {
//   console.log("*****After All Hooks ****");
// });

// AfterEach(() => {
//   console.log("*****After Each Hooks ****");
// });
