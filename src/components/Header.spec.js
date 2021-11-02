import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders", () => {
    render(<Header />);
    const name = screen.getByText("Hi,");
    expect(name).toBeInTheDocument();
  });
});
