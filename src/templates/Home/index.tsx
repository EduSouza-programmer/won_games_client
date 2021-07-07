import Base from "@/templates/Base";
import BannerSlider from "@/components/BannerSlider";
import Showcase from "@/components/Showcase";
import { BannerProps } from "@/components/Banner";
import { Container } from "@/components/Container";
import { GameCardProps } from "@/components/GameCard";
import { HighlightProps } from "@/components/Highlight";

import * as S from "./Home.styles";

export type HomeTamplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  upcommingGames: GameCardProps[];
  upcommingMoreGames: GameCardProps[];
  freeHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingHighlight,
  upcommingGames,
  upcommingMoreGames,
  freeHighlight,
  freeGames,
}: HomeTamplateProps) {
  return (
    <Base>
      <Container>
        <S.MainHome>
          <BannerSlider items={banners} />
        </S.MainHome>
      </Container>

      <S.SectionNews>
        <Showcase
          title="News"
          arrowColorSlider="black"
          gamesSlider={newGames}
        />
      </S.SectionNews>

      <S.SectionMostPopular>
        <Showcase
          title="Most Popular"
          highlight={mostPopularHighlight}
          gamesSlider={mostPopularGames}
        />
      </S.SectionMostPopular>

      <S.SectionUpcomming>
        <Showcase title="Upcomming" gamesSlider={upcommingGames} />
        <Showcase
          highlight={upcommingHighlight}
          gamesSlider={upcommingMoreGames}
        />
      </S.SectionUpcomming>

      <S.SectionFreeGames>
        <Showcase
          title="Free Games"
          highlight={freeHighlight}
          gamesSlider={freeGames}
        />
      </S.SectionFreeGames>
    </Base>
  );
}

export default Home;
