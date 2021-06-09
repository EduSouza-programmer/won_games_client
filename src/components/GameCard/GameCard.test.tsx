import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import GameCard from ".";

const propsRequired = {
  title: "Population Zero",
  developer: "Other Ocean",
  img: "/img/population-zero.jpg",
  price: "R$ 235,00",
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

    const price = screen.getByLabelText(/price/i);

    expect(price).not.toHaveStyle({
      "text-decoration": "line-through",
    });

    expect(price).toHaveStyle({
      "background-color": "#3CD3C1",
    });
  });

  it("should render a line-through in price when promotional", () => {
    renderWithTheme(
      <GameCard {...propsRequired} promotionalPrice="R$ 190,00" />
    );

    const prices = screen.getAllByLabelText(/price/i);

    expect(prices[0]).toHaveStyle({
      "text-decoration": "line-through",
    });

    expect(prices[0].getAttribute("aria-roledescription")).toBe(
      "this price has been promoted a discount"
    );

    expect(prices[1]).not.toHaveStyle({
      "text-decoration": "line-through",
    });
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
