import BannerSliderMock from "@/components/BannerSlider/BannerSlider.mock";
import GameCardSliderMock from "@/components/GameCardSlider/GameCardSlider.mock";
import HighlightMock from "@/components/Highlight/Highlight.mock";

import Home, { HomeTamplateProps } from "@/templates/Home";

export default function Index(props: HomeTamplateProps) {
  return <Home {...props} />;
}

export function getStaticProps() {
  return {
    props: {
      banners: BannerSliderMock,
      newGames: GameCardSliderMock,
      mostPopularHighlight: HighlightMock,
      mostPopularGames: GameCardSliderMock,
      upcommingHighlight: HighlightMock,
      upcommingGames: GameCardSliderMock,
      upcommingMoreGames: GameCardSliderMock,
      freeHighlight: HighlightMock,
      freeGames: GameCardSliderMock,
    },
  };
}
