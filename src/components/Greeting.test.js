import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

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
});
