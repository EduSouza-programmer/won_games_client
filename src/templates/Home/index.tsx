import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import BannerSlider from "@/components/BannerSlider";
import GameCardSlider from "@/components/GameCardSlider";
import { Container } from "@/components/Container";

import { BannerProps } from "@/components/Banner";
import { GameCardProps } from "@/components/GameCard";
import Highlight, { HighlightProps } from "@/components/Highlight";

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
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary">
            News
          </Heading>
          <GameCardSlider items={newGames} arrowColor="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider items={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcomming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider items={upcommingGames} />
          <Highlight {...upcommingHighlight} />
          <GameCardSlider items={upcommingMoreGames} />
        </S.SectionUpcomming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free Games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider items={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </section>
  );
}

export default Home;
