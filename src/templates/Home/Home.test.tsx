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

jest.mock("@/components/BannerSlider", () => {
  return {
    __esModule: true,
    default: function myMock() {
      return <div data-testid="Mock BannerSlider" />;
    },
  };
});

jest.mock("@/components/Showcase", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="Mock Showcase" />,
  };
});

describe("<Home />", () => {
  it("should render bannerSlider and showcase", () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId(/mock bannerSlider/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5);
  });
});
