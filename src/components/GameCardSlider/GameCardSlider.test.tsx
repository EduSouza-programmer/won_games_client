// eslint-disable-next-line import/no-unresolved
import "match-media-mock";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import { GameCardProps } from "@/components/GameCard";
import GameCardSlider from ".";

const items: GameCardProps[] = [
  {
    title: "Poulation Zero 1",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 2",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 3",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 4",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 5",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
];

describe("<GameCardSlider />", () => {
  it("should render with 4 active items", () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);
    expect(container.querySelectorAll(".slick-active")).toHaveLength(4);
    expect(container.querySelectorAll(".slick-slide")).toHaveLength(5);
  });

  it("should render correctly lazyload for item no active", () => {
    renderWithTheme(<GameCardSlider items={items} />);

    expect(screen.queryByText(/poulation zero 5/i)).not.toBeInTheDocument();
  });

  it("should render white arrows by default", () => {
    renderWithTheme(<GameCardSlider items={items} />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: "#FAFAFA",
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("should render black arrows when props passed", () => {
    renderWithTheme(<GameCardSlider items={items} arrowColor="black" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: "#030517",
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: "#030517",
    });
  });

  it("should render with match snapshot", () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
