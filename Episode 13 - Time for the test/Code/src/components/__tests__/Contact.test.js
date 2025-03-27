import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is like group the test case
describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    // console.log("Before All");
  });
  beforeEach(() => {
    // console.log("Before Each");
  });

  afterAll(() => {
    // console.log("After All");
  });
  afterEach(() => {
    // console.log("After Each");
  });

  //we can also start test case with 'it'
  test("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
