import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  const mockOnChange = jest.fn();

  it("renders", () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const inputEl = screen.getByLabelText("Search bar");
    expect(inputEl).toBeInTheDocument();
  });

  it("calls a function when the user starts typing into the search bar and the input value changes", () => {
    render(
      <Router>
        <SearchBar onChange={mockOnChange} />
      </Router>
    );

    const inputEl = screen.getByLabelText("Search bar");
    userEvent.type(inputEl, "Klammerfisch");
    expect(mockOnChange).toHaveBeenCalled();
  });
});
