import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Price from ".";

const props = {
  price: "R$ 195,00",
  promotionalPrice: "R$ 145,00",
};

describe("<Price />", () => {
  it("should render a children", () => {
    renderWithTheme(<Price price={props.price} />);

    const price = screen.getByLabelText(/price/i);
    expect(price).toBeInTheDocument();
    expect(price.getAttribute("aria-roledescription")).toBe(
      "the product price"
    );
    expect(price).not.toHaveStyle({
      "text-decoration": "line-through",
    });
  });

  it("should render a promotional price when passed", () => {
    renderWithTheme(<Price {...props} />);

    const fullPrice = screen.getByLabelText(/full price/i);
    expect(fullPrice).toHaveStyle({
      "text-decoration": "line-through",
    });

    expect(fullPrice.getAttribute("aria-roledescription")).toBe(
      "full product price"
    );
  });

  it("should not render promotional price if not passed ", () => {
    renderWithTheme(<Price price={props.price} />);

    expect(screen.queryByLabelText(/full price/i)).not.toBeInTheDocument();
  });
});
