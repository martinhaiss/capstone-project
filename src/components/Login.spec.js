import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login", () => {
  it("displays an image", () => {
    render(<Login />);

    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toBeInTheDocument();
  });

  it("displays an image", () => {
    render(<Login />);

    const logoImage = screen.getByAltText("welcome to collab");
    expect(logoImage).toBeInTheDocument();
  });

  it("has an input field for the user's name, which requires an input", () => {
    render(<Login />);

    const inputEl = screen.getByPlaceholderText("Username");
    expect(inputEl).toBeRequired();
  });

  it("has an input field for the user's password, which requires an input", () => {
    render(<Login />);

    const inputEl = screen.getByPlaceholderText("Password");
    expect(inputEl).toBeRequired();
  });

  it('is possible for the user to type "Klammerfische" into the input field', () => {
    render(<Login />);

    const inputEl = screen.getByPlaceholderText("Username");
    userEvent.type(inputEl, "Klammerfische");
    expect(inputEl).toHaveValue("Klammerfische");
  });
});
