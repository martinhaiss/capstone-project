import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import JoinButton from "./JoinButton";

describe("JoinButton", () => {
  const mockToggleJoin = jest.fn();
  const mockIsJoined = true;

  it("renders", () => {
    render(<JoinButton />);
    const joinButton = screen.getByRole("button");
    expect(joinButton).toBeInTheDocument();
  });
  it("toggles when clicked", () => {
    render(<JoinButton isJoined={mockIsJoined} toggleJoin={mockToggleJoin} />);
    const joinButton = screen.getByRole("button");
    userEvent.click(joinButton);
    expect(mockToggleJoin).toHaveBeenCalled;
  });
});
