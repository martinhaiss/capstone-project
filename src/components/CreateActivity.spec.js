import CreateActivity from "./CreateActivity";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("CreateActivity", () => {
  it("has twelve input fields", () => {
    render(<CreateActivity />);

    const inputCycling = screen.getByLabelText("Cycling");
    expect(inputCycling).toBeRequired();

    const inputRunning = screen.getByLabelText("Running");
    expect(inputRunning).toBeRequired();

    const inputName = screen.getByLabelText("Name Of Your Activity");
    expect(inputName).toBeRequired();

    const inputUpload = screen.getByLabelText("Upload Map");
    expect(inputUpload);

    const inputDate = screen.getByLabelText("Date");
    expect(inputDate).toBeRequired();

    const inputTime = screen.getByLabelText("Start-Time");
    expect(inputTime).toBeRequired();

    const inputDistance = screen.getByLabelText("Distance");
    expect(inputDistance).toBeRequired();

    const inputPostalCode = screen.getByLabelText("Postal Code");
    expect(inputPostalCode).toBeRequired();

    const inputCity = screen.getByLabelText("City");
    expect(inputCity).toBeRequired();

    const inputAddress = screen.getByLabelText("Start-Point");
    expect(inputAddress).toBeRequired();

    const inputInfo = screen.getByLabelText("Info");
    expect(inputInfo);
  });

  it("has a textarea with maximum length of 140 Characters", () => {
    render(<CreateActivity />);

    const inputInfo = screen.getByLabelText("Info");
    expect(inputInfo).toHaveAttribute("maxLength", "140");
  });

  it("the form is send via onCreateActivity", () => {
    const mockOnCreateActivity = jest.fn();
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <CreateActivity onCreateActivity={mockOnCreateActivity} />
      </Router>
    );

    const inputCycling = screen.getByLabelText("Cycling");
    userEvent.click(inputCycling);

    const inputName = screen.getByLabelText("Name Of Your Activity");
    userEvent.type(inputName, "Test Activity");

    const inputRoute = screen.getByLabelText("Upload Map");
    userEvent.type(inputRoute, "./img/map-placeholder-2.png");

    const inputDate = screen.getByLabelText("Date");
    userEvent.type(inputDate, "2021-11-09");

    const inputTime = screen.getByLabelText("Start-Time");
    userEvent.type(inputTime, "20:15 Uhr");

    const inputDistance = screen.getByLabelText("Distance");
    userEvent.type(inputDistance, "50");

    const inputDuration = screen.getByLabelText("Duration");
    userEvent.type(inputDuration, "2");

    const inputPostalCode = screen.getByLabelText("Postal Code");
    userEvent.type(inputPostalCode, "22765");

    const inputCity = screen.getByLabelText("City");
    userEvent.type(inputCity, "Hamburg");

    const inputAddress = screen.getByLabelText("Start-Point");
    userEvent.type(inputAddress, "Museumstraße 23");

    const inputInfo = screen.getByLabelText("Info");
    userEvent.type(
      inputInfo,
      "Entlang der Elbe, vorbei an Schaf-Herden und der NABU Vogelstation in der Wedeler Marsch."
    );

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(mockOnCreateActivity).toHaveBeenCalledWith({
      id: expect.any(String),
      discipline: "cycling",
      name: "Test Activity",
      route: "./img/map-placeholder-2.png",
      date: "2021-11-09",
      time: "20:15",
      distance: "50",
      duration: "2",
      postalcode: "22765",
      city: "Hamburg",
      street: "Museumstraße 23",
      info:
        "Entlang der Elbe, vorbei an Schaf-Herden und der NABU Vogelstation in der Wedeler Marsch.",
    });
  });
});
