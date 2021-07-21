import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import GameDetails, { GameDetailsProps } from ".";

const props: GameDetailsProps = {
  developer: "Different Tales",
  platforms: ["windows", "mac", "linux"],
  releaseDate: "2020-11-21T23:00:00",
  publisher: "Walkabout",
  rating: "BR0",
  gender: ["Role-playing", "Narrative"],
};

describe("<GameDetails />", () => {
  it("should render the headings in <S.Block> element", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(
      screen.getByRole("heading", { name: /developer/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /release date/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /platforms/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /publisher/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /rating/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /genres/i })
    ).toBeInTheDocument();
  });

  it("should render game developer", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/different tales/i)).toBeInTheDocument();
  });

  it("should render game platforms", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByRole("img", { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /mac/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /windows/i })).toBeInTheDocument();
  });

  it("should render releaseDate formated", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Nov 21, 2020")).toBeInTheDocument();
  });

  it("should render game pulisher", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/walkabout/i)).toBeInTheDocument();
  });

  it("should render free rating when BR0", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it("should render 18+ rating when BR18", () => {
    renderWithTheme(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });

  it("should render a list of genres", () => {
    renderWithTheme(<GameDetails {...props} />);

    expect(screen.getByText("Role-playing / Narrative")).toBeInTheDocument();
  });
});
