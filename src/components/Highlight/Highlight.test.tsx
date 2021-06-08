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
    renderWithTheme(<Highlight {...propsRequired} />);

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
  });

  it("should render background image", () => {
    const { container } = renderWithTheme(<Highlight {...propsRequired} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${propsRequired.backgroundImage})`,
    });
  });

  it("should render float image by props passed", () => {
    renderWithTheme(
      <Highlight {...propsRequired} floatImage="/img/red-dead-float.png" />
    );

    expect(
      screen.getByRole("img", { name: propsRequired.title })
    ).toHaveAttribute("src", "/img/red-dead-float.png");
  });

  it("should render align right S.Content correcty by default", () => {
    const { container } = renderWithTheme(<Highlight {...propsRequired} />);

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /floatimage content/
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "right", {
      modifier: `${S.Content}`,
    });
  });

  it("should render align left S.Content correcty when props passed", () => {
    const { container } = renderWithTheme(
      <Highlight {...propsRequired} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      "grid-template-areas",
      /content floatimage/
    );

    expect(container.firstChild).toHaveStyleRule("text-align", "left", {
      modifier: `${S.Content}`,
    });
  });
});
