import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import Heading from ".";

describe("<Heading />", () => {
  it("1°- should render a white heading by default", () => {
    renderWithTheme(<Heading>Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("2°- should render a black heading when color is passed", () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      color: "#030517",
    });
  });

  it("3°- should render a line to the left side with size value default", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won game/i })).toHaveStyle({
      "border-left-width": "0.5rem",
      "border-color": "#3CD3C1",
    });
  });

  it("4°- should render a line to the left side with size value small when passed", () => {
    renderWithTheme(
      <Heading lineColor="primary" size="small" lineLeft>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "border-left-width": "0.5rem",
      "border-color": "#F231A5",
    });
  });

  it("5°- should render a line to the left side with size value medium when passed", () => {
    renderWithTheme(
      <Heading lineColor="primary" size="medium" lineLeft>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "border-left-width": "0.7rem",
    });
  });

  it("6°- should render a line to the left side with size value huge when passed", () => {
    renderWithTheme(
      <Heading lineColor="primary" size="huge" lineLeft>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "border-left-width": "1rem",
    });
  });

  it("7°- should render a line bottom with size value by default", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "5rem",
      {
        modifier: "::after",
      }
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "border-top-width",
      "0.5rem",
      {
        modifier: "::after",
      }
    );
  });

  it("8°- should render a line bottom with size value small when passed", () => {
    renderWithTheme(
      <Heading lineColor="secondary" size="small" lineBottom>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "3rem",
      {
        modifier: "::after",
      }
    );
  });

  it("9°- should render a line bottom with size value medium when passed", () => {
    renderWithTheme(
      <Heading lineColor="secondary" size="medium" lineBottom>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "5rem",
      {
        modifier: "::after",
      }
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "border-top-width",
      "0.7rem",
      {
        modifier: "::after",
      }
    );
  });

  it("10°- should render a line bottom with size value huge when passed", () => {
    renderWithTheme(
      <Heading lineColor="secondary" size="huge" lineBottom>
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "width",
      "7rem",
      {
        modifier: "::after",
      }
    );
  });

  it("11°- should render with the value small correctly when passed", () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "1.6rem",
    });
  });

  it("12°- should render with the value medium correctly when passed", () => {
    renderWithTheme(<Heading size="medium">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "calc(2.0rem + 4px)",
    });
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyleRule(
      "font-size",
      "2.8rem",
      {
        media: "(min-width: 768px)",
      }
    );
  });

  it("13°- should render heading with size huge when passed", () => {
    renderWithTheme(<Heading size="huge">Won Games</Heading>);

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "5.2rem",
    });
  });

  it("14°- should render heading with fontsize responsive", () => {
    renderWithTheme(
      <Heading
        responsiveSize={{
          minFontSizes: 16,
          maxFontSizes: 52,
          isNoWrapperText: true,
        }}
      >
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "white-space": "nowrap",
    });
  });

  it("15°- should render heading without fontsize responsive when size is passed", () => {
    renderWithTheme(
      <Heading
        responsiveSize={{
          minFontSizes: 16,
          maxFontSizes: 52,
          isNoWrapperText: true,
        }}
        size="small"
      >
        Won Games
      </Heading>
    );

    expect(screen.getByRole("heading", { name: /won games/i })).not.toHaveStyle(
      {
        "white-space": "nowrap",
      }
    );
    expect(screen.getByRole("heading", { name: /won games/i })).toHaveStyle({
      "font-size": "1.6rem",
    });
  });

  it("16°- should render a heading with the primary color as default for lineBottom and lineLeft", () => {
    renderWithTheme(
      <Heading lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won games/i });

    expect(heading).toHaveStyle({ "border-color": "#F231A5" });
    expect(heading).toHaveStyleRule("border-color", "#F231A5", {
      modifier: "::after",
    });
  });

  it("17°- should render a heading with a primary color when passed", () => {
    renderWithTheme(
      <Heading lineColor="primary" lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won game/i });
    expect(heading).toHaveStyle({ "border-color": "#F231A5" });
    expect(heading).toHaveStyleRule("border-color", "#F231A5", {
      modifier: "::after",
    });
  });

  it("18°- should render a heading with a secondary color when passed", () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Games
      </Heading>
    );

    const heading = screen.getByRole("heading", { name: /won game/i });
    expect(heading).toHaveStyle({ "border-color": "#3CD3C1" });
    expect(heading).toHaveStyleRule("border-color", "#3CD3C1", {
      modifier: "::after",
    });
  });
});
