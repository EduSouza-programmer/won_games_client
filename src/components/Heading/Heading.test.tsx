import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("should render a white heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      color: "#030517",
    });
  });

  it("should render a heading with a line to the left side", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      "border-left": "0.5rem solid #3CD3C1",
    });
  });

  it("should render a heading with a line at the bottom", () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyleRule(
      "border-top",
      "0.5rem solid #F231A5",
      {
        modifier: "::after",
      }
    );
  });

  it("should render a heading with a small size", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "1.6rem",
    });

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "3rem",
      {
        modifier: "::after",
      }
    );
  });

  it("should render a heading with the primary color as default for lineBottom and lineLeft", () => {
    renderWithTheme(
      <Heading lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won games/i });

    expect(heading).toHaveStyle({ "border-left": "0.5rem solid #F231A5" });
    expect(heading).toHaveStyleRule("border-top", "0.5rem solid #F231A5", {
      modifier: "::after",
    });
  });

  it("should render a heading with a primary line's color's", () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won game/i });
    expect(heading).toHaveStyle({ "border-left": "0.5rem solid #F231A5" });
    expect(heading).toHaveStyleRule("border-top", "0.5rem solid #F231A5", {
      modifier: "::after",
    });
  });

  it("should render a heading with a secondary line's color's", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won game/i });
    expect(heading).toHaveStyle({ "border-left": "0.5rem solid #3CD3C1" });
    expect(heading).toHaveStyleRule("border-top", "0.5rem solid #3CD3C1", {
      modifier: "::after",
    });
  });
});
