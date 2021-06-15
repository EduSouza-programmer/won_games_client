// eslint-disable-next-line import/no-unresolved
import "match-media-mock";

import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests/helpers";

import BannerSliderMock from "@/components/BannerSlider/BannerSlider.mock";
import GameCardSliderMock from "@/components/GameCardSlider/GameCardSlider.mock";
import HighlightMock from "@/components/Highlight/Highlight.mock";

import Home, { HomeTamplateProps } from ".";

const props: HomeTamplateProps = {
  banners: [BannerSliderMock[0]],
  newGames: [GameCardSliderMock[0]],
  mostPopularHighlight: HighlightMock,
  mostPopularGames: [GameCardSliderMock[0]],
  upcommingHighlight: HighlightMock,
  upcommingGames: [GameCardSliderMock[0]],
  upcommingMoreGames: [GameCardSliderMock[0]],
  freeHighlight: HighlightMock,
  freeGames: [GameCardSliderMock[0]],
};

describe("<Home />", () => {
  it("should render menu, footer and sections", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /contact/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /free Games/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/defy death 1/i)).toBeInTheDocument();
    expect(screen.getAllByText(/population zero 1/i)).toHaveLength(5);
    expect(screen.getAllByText(/read dead it's back/i)).toHaveLength(3);
  });
});
