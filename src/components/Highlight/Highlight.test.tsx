import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import * as S from "./Highlight.styles";

import Highlight from ".";

const propsRequired = {
  title: "Heading 1",
  subtitle: "Heading 2",
  buttonLabel: "Buy now",
  buttonLink: "https://any",
  backgroundImage: "/img/red-dead-img.jpg",
};

describe("<Highlight />", () => {
  it("should render the headings and button", () => {
    const { container } = renderWithTheme(<Highlight {...propsRequired} />);

    expect(
      screen.getByRole("heading", { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /heading 2/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Buy now/i })).toHaveAttribute(
      "href",
      "https://any"
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render background image", () => {
    renderWithTheme(<Highlight {...propsRequired} />);

    expect(
      screen.getByRole("img", {
        name: /a background image with title heading 1/i,
      })
    ).toHaveAttribute("src", "/img/red-dead-img.jpg");
  });

  it("should render float image by props passed", () => {
    renderWithTheme(
      <Highlight {...propsRequired} floatImage="/img/red-dead-float.png" />
    );

    expect(
      screen.getByRole("img", { name: propsRequired.title })
    ).toHaveAttribute("src", "/img/red-dead-float.png");
  });

  it("should render the image right-aligned by default", () => {
    const { container } = renderWithTheme(
      <Highlight {...propsRequired} floatImage="/img/red-dead-float.png" />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /floatimage content/,
      {
        modifier: `${S.Grid}`,
      }
    );
  });

  it("should render align left S.Content correcty when props passed", () => {
    const { container } = renderWithTheme(
      <Highlight {...propsRequired} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /content floatimage/,
      {
        modifier: `${S.Grid}`,
      }
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Grid} ${S.Content}`,
    });
  });
});
