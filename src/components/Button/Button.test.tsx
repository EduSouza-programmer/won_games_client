import { screen } from "@testing-library/react";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import { renderWithTheme } from "@/utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
  it("should render the medium size by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1.4rem",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small size", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      height: "3rem",
      padding: "0.8rem",
      "font-size": "1.2rem",
    });
  });

  it("should render the large size", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.0rem",
      "font-size": "1.6rem",
    });
  });

  it("should render a fullWidth version", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      width: "100%",
    });
  });

  it("should render an icon version", () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart role="img" aria-label="won game" />}>
        render icon version done
      </Button>
    );

    expect(screen.getByText(/render icon version done/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/won game/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/won game/i).parentElement).toHaveTextContent(
      /render icon version done/i
    );
  });
});
