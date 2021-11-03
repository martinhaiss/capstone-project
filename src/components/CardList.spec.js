import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  const mockData = [
    {
      id: "1",
      discipline: "cycling",
      name: "Am Deich Schafen gute Nacht sagen",
      route: "./img/maps/hamburg-wedeler-marsch_bike.jpg",
      date: "2021-11-09",
      time: "20:15 Uhr",
      distance: "50",
      duration: "2",
      postalcode: "22765",
      city: "Hamburg",
      street: "Museumstraße 23",
      info:
        "Die Elbe entlang, vorbei an Schafen. Sehr vielen Schafen. Wer ist dabei?",
      joined: false,
    },
    {
      id: "2",
      discipline: "cycling",
      name: "Mittagsrunde",
      route: "./img/maps/hamburg-wedeler-marsch_bike.jpg",
      date: "2021-11-09",
      time: "12:15 Uhr",
      distance: "50",
      duration: "2",
      postalcode: "22765",
      city: "Hamburg",
      street: "Museumstraße 23",
      info: "Die Elbe entlang, vorbei an Schafen. Wer ist dabei?",
      joined: true,
    },
    {
      id: "3",
      discipline: "cycling",
      name: "Abendrunde",
      route: "./img/maps/hamburg-wedeler-marsch_bike.jpg",
      date: "2021-11-09",
      time: "20:15 Uhr",
      distance: "50",
      duration: "2",
      postalcode: "22765",
      city: "Hamburg",
      street: "Museumstraße 23",
      info: "Die Elbe entlang, Wer ist dabei?",
      joined: false,
    },
  ];

  it("renders 4 activities", () => {
    render(<CardList activities={mockData} />);

    const cardListActivities = screen.getAllByRole("article");
    expect(cardListActivities).toHaveLength(3);
  });
});
