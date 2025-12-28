import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "./Hello";

describe("Hello component", () => {
  it("renders the correct text", () => {
    render(<Hello />);
    expect(
      screen.getByText("Hello, Next.js with TypeScript!")
    ).toBeInTheDocument();
  });
});
