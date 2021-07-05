// eslint-disable-next-line import/no-unresolved
import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import highlightMock from "@/components/Highlight/Highlight.mock";
import gameCardSliderMock from "@/components/GameCardSlider/GameCardSlider.mock";

import Showcase, { ShowcaseProps } from ".";

const props: ShowcaseProps = {
  title: "my title",
  highlight: highlightMock,
  gamesSlider: gameCardSliderMock.slice(0, 5),
};

describe("<Showcase />", () => {
  it("should render nothing if no prop is passed", () => {
    const { container } = renderWithTheme(<Showcase />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("should render a title when passed", () => {
    const { container } = renderWithTheme(<Showcase title={props.title} />);

    expect(
      screen.getByRole("heading", { name: props.title })
    ).toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;
    expect(totalChildren).toBe(1);
  });

  it("should render without title", () => {
    const { container } = renderWithTheme(
      <Showcase gamesSlider={props.gamesSlider} highlight={highlightMock} />
    );

    screen.getByRole("heading", { name: highlightMock.title });
    screen.getByRole("heading", { name: gameCardSliderMock[0].title });

    expect(
      screen.queryByRole("heading", { name: props.title })
    ).not.toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;
    expect(totalChildren).toBe(2);
  });

  it("should render a highlight when passed", () => {
    const { container } = renderWithTheme(
      <Showcase highlight={props.highlight} />
    );

    expect(
      screen.getByRole("heading", { name: highlightMock.title })
    ).toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;
    expect(totalChildren).toBe(1);
  });

  it("should render without highlight", () => {
    const { container } = renderWithTheme(
      <Showcase title={props.title} gamesSlider={props.gamesSlider} />
    );

    screen.getByRole("heading", { name: props.title });
    screen.getByRole("heading", { name: gameCardSliderMock[0].title });

    expect(
      screen.queryByRole("heading", { name: highlightMock.title })
    ).not.toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;
    expect(totalChildren).toBe(2);
  });

  it("should render a gamesSlider when passed", () => {
    const { container } = renderWithTheme(
      <Showcase gamesSlider={props.gamesSlider} />
    );

    expect(
      screen.getAllByRole("heading", { name: gameCardSliderMock[0].title })[0]
    ).toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;

    expect(totalChildren).toBe(1);
  });

  it("should render without gamesSlider", () => {
    const { container } = renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    );

    screen.getByRole("heading", { name: props.title });
    screen.getByRole("heading", { name: highlightMock.title });

    expect(
      screen.queryByRole("heading", { name: gameCardSliderMock[0].title })
    ).not.toBeInTheDocument();

    const totalChildren = container.firstElementChild?.childElementCount;
    expect(totalChildren).toBe(2);
  });

  it("should render correct count of all elements", () => {
    const { container } = renderWithTheme(<Showcase {...props} />);
    const totalChildren = container.firstElementChild?.childElementCount;

    expect(totalChildren).toBe(3);
  });

  it("should render arrow color slider white by default", () => {
    renderWithTheme(<Showcase {...props} />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: "#FAFAFA",
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  it("should render arrow color slider black when passed", () => {
    renderWithTheme(<Showcase {...props} arrowColorSlider="black" />);

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: "#030517",
    });
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: "#030517",
    });
  });
});
