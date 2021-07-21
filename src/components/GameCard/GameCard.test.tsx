import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import GameCard, { GameCardProps } from ".";

const propsRequired: GameCardProps = {
  title: "Population Zero",
  developer: "Other Ocean",
  img: "/img/population-zero.jpg",
  gamePrice: {
    price: "R$ 210,00",
    promotionalPrice: "R$ 190,00",
  },
};

describe("<GameCard />", () => {
  it("should render correctly props required passed in <GameCard/>", () => {
    renderWithTheme(<GameCard {...propsRequired} />);

    expect(
      screen.getByRole("heading", { name: propsRequired.title })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: propsRequired.developer })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: propsRequired.title })
    ).toHaveAttribute("src", propsRequired.img);

    expect(
      screen.getByRole("button", { name: /heart button/i }).firstChild
    ).toHaveAttribute("aria-label", "Add to Wishlist");

    expect(
      screen.getByRole("button", { name: /add to shoppingCart/i })
    ).toHaveStyle({
      height: "3rem" /* small */,
    });
  });

  it("should render price in label by default", () => {
    renderWithTheme(<GameCard {...propsRequired} />);

    expect(screen.getByText("R$ 210,00")).toBeInTheDocument();
  });

  it("should render a promotional", () => {
    renderWithTheme(<GameCard {...propsRequired} />);
    expect(screen.getByText("R$ 190,00")).toBeInTheDocument();
  });

  it("should render a filled Favorite icon when favorite is true", () => {
    renderWithTheme(<GameCard {...propsRequired} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it("should call onFav method when favorite is clicked", () => {
    const onFav = jest.fn();
    renderWithTheme(<GameCard {...propsRequired} onFav={onFav} />);

    fireEvent.click(screen.getAllByRole("button")[0]);

    expect(onFav).toBeCalled();
  });

  it("should render Ribbon when props passed", () => {
    renderWithTheme(
      <GameCard
        {...propsRequired}
        ribbon="20% OFF"
        ribbonColor="primary"
        ribbonSize="small"
      />
    );

    const ribbon = screen.getByText("20% OFF");

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({
      "background-color": "#F231A5",
    });
    expect(ribbon).toHaveStyle({
      height: "2.6rem",
    });
  });
});
