import { render, screen } from "@testing-library/react";
import NoActivitiesMessage from "./NoActivitiesMessage";

describe("NoActivitiesMessage", () => {
  it("renders", () => {
    render(<NoActivitiesMessage />);
    const heading = screen.getByText("No activities joined so far");
    expect(heading).toBeInTheDocument();
  });

  it("renders", () => {
    render(<NoActivitiesMessage />);
    const message = screen.getByText(
      "Look for suitable activities and collab!"
    );
    expect(message).toBeInTheDocument();
  });
});
