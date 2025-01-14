import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

// 3 "a"s
// Arrange -> Set up the test data, test conditions and test environment;
// Act -> Run logid that should be tested (e.g. excute functions);
// Assert -> Compare execution results with expected results;
describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    ///... nothing

    // Assert
    // get functions will throw an error if the elemet is not found
    // query functions won't throw an error if the element is not found
    // find functions will return a promise

    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // assert
    const outputElement = screen.getByText("Changed!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const button = screen.getByRole("button");
    userEvent.click(button);

    // assert
    const outputElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).not.toBeInTheDocument();
  });
});
