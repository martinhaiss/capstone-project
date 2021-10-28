import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login", () => {
  it("displays an image", () => {
    render(<Login />);

    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toBeInTheDocument();
  });

  it("displays an image with an alt-text", () => {
    render(<Login />);

    const altText = screen.getByAltText("collab");
    expect(altText).toBeInTheDocument();
  });

  it("has heading with the app's name ", () => {
    render(<Login />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Welcome to Collab");
  });

  it("has an input field for the user's name, which requires an input", () => {
    render(<Login />);

    const inputEl = screen.getByPlaceholderText("Please enter your name");
    expect(inputEl).toBeRequired();
  });

  it('is possible for the user to type "Klammerfische" into the input field', () => {
    render(<Login />);

    const inputEl = screen.getByPlaceholderText("Please enter your name");
    userEvent.type(inputEl, "Klammerfische");
    expect(inputEl).toHaveValue("Klammerfische");
  });
});
