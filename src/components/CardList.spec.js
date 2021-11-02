import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

const mockData = [
  {
    sport: "https://i.imgur.com/5z0pzoH.png",
    name: "Schnelle Abendrunde Richtung Jenischpark",
    route: "https://i.imgur.com/2EQ7oCt.png",
    date: "05.11.2021",
    time: "18:15 Uhr ",
    distance: "14 km",
    duration: "1:00 h",
  },
  {
    sport: "https://i.imgur.com/J2nnsMN.png",
    name: "Deichrunde am Abend",
    route: "https://i.imgur.com/gu3gwcr.png",
    date: "06.11.2021",
    time: "17:30 Uhr",
    distance: "50 km",
    duration: "2:00 h",
  },

  {
    sport: "https://i.imgur.com/5z0pzoH.png",
    name: "Schnelle Runde am Mittag",
    route: "https://i.imgur.com/2EQ7oCt.png",
    date: "08.11.2021",
    time: "12:15 Uhr",
    distance: "14 km",
    duration: "1:00 h",
  },
  {
    sport: "https://i.imgur.com/J2nnsMN.png",
    name: "Zum Deich den Schafen gute Nacht sagen",
    route: "https://i.imgur.com/gu3gwcr.png",
    date: "09.11.2021",
    time: "20:15 Uhr",
    distance: "50 km",
    duration: "2:00 h",
  },
];

describe("CardList", () => {
  it("renders CardList element", () => {
    render(<CardList activityData={mockData} />);

    const activities = screen.getByRole("ActivityCard");
    expect(activities).toBeInTheDocument();
  });
});
