import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import GameInfo, { GameInfoProps } from ".";

const props: GameInfoProps = {
  title: "My game title",
  description: "Game description",
  gamePrice: {
    price: "R$ 210,00",
  },
};

describe("<GameInfo />", () => {
  it("should render game informations", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("heading", { name: /my game title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/game description/i)).toBeInTheDocument();
    expect(screen.getByText(/210.00/i)).toBeInTheDocument();
  });
  it("should render buttons", () => {
    renderWithTheme(<GameInfo {...props} />);

    expect(
      screen.getByRole("button", { name: /adicionar/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /lista de desejos/i })
    ).toBeInTheDocument();
  });
});
