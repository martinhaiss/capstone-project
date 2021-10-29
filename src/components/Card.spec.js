import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("renders elements of activity", () => {
    render(
      <Card
        name="Zum Deich den Schafen gute Nacht sagen"
        distance="Distance: 50 km"
        duration="Duration: 2:00 h"
      />
    );

    const name = screen.getByText("Zum Deich den Schafen gute Nacht sagen");
    expect(name).toBeInTheDocument();

    const img = screen.getByAltText("map with route");
    expect(img).toBeInTheDocument();
  });
});

it("renders two button", () => {
  render(<Card />);

  const Button = screen.getAllByRole("button");
  expect(Button).toHaveLength(2);
});
