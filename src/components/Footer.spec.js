import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders 5 links", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(5);
  });

  it("changes to active when icon is clicked", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkHome = links[0];
    userEvent.click(linkHome);
    expect(linkHome).toHaveClass("is-active");
  });

  it(`doesn't change the "joined", "cycling", "running" and "create" links to active when "home" link is clicked`, () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkHome = links[0];
    const linkJoined = links[1];
    const linkCycling = links[2];
    const linkRunning = links[3];
    const linkCreate = links[4];
    userEvent.click(linkHome);
    expect(linkJoined).not.toHaveClass("is-active");
    expect(linkCycling).not.toHaveClass("is-active");
    expect(linkRunning).not.toHaveClass("is-active");
    expect(linkCreate).not.toHaveClass("is-active");
  });

  it('changes to active when "join" link is clicked', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkJoined = links[1];
    userEvent.click(linkJoined);
    expect(linkJoined).toHaveClass("is-active");
  });

  it(`doesn't change the "home", "cycling" and "running" links to active when "joined" link is clicked`, () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkHome = links[0];
    const linkJoined = links[1];
    const linkCycling = links[2];
    const linkRunning = links[3];
    userEvent.click(linkJoined);
    expect(linkHome).not.toHaveClass("is-active");
    expect(linkCycling).not.toHaveClass("is-active");
    expect(linkRunning).not.toHaveClass("is-active");
  });

  it('changes to active when "cycling" link is clicked', () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkCycling = links[2];
    userEvent.click(linkCycling);
    expect(linkCycling).toHaveClass("is-active");
  });

  it(`doesn't change the "home", "joined" and "running" links to active when "cycling" link is clicked`, () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const links = screen.getAllByRole("link");
    const linkHome = links[0];
    const linkJoined = links[1];
    const linkCycling = links[2];
    const linkRunning = links[3];
    userEvent.click(linkCycling);
    expect(linkHome).not.toHaveClass("is-active");
    expect(linkJoined).not.toHaveClass("is-active");
    expect(linkRunning).not.toHaveClass("is-active");
  });
});

it('changes to active when "running" link is clicked', () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  const links = screen.getAllByRole("link");
  const linkRunning = links[3];
  userEvent.click(linkRunning);
  expect(linkRunning).toHaveClass("is-active");
});

it(`doesn't change the "home", "joined" and "cycling" links to active when "running" link is clicked`, () => {
  render(
    <Router>
      <Footer />
    </Router>
  );

  const links = screen.getAllByRole("link");
  const linkHome = links[0];
  const linkJoined = links[1];
  const linkCycling = links[2];
  const linkRunning = links[3];
  userEvent.click(linkRunning);
  expect(linkHome).not.toHaveClass("is-active");
  expect(linkJoined).not.toHaveClass("is-active");
  expect(linkCycling).not.toHaveClass("is-active");
});
