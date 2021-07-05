import Heading from "@/components/Heading";
import Highlight, { HighlightProps } from "@/components/Highlight";
import GameCardSlider from "@/components/GameCardSlider";
import { GameCardProps } from "@/components/GameCard";
import * as S from "./Showcase.styles";

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  gamesSlider?: GameCardProps[];
  arrowColorSlider?: "white" | "black";
};

function Showcase({
  title,
  highlight,
  gamesSlider,
  arrowColorSlider = "white",
}: ShowcaseProps) {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading className="heading" lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      {!!highlight && <Highlight {...highlight} />}
      {!!gamesSlider && (
        <GameCardSlider arrowColor={arrowColorSlider} items={gamesSlider} />
      )}
    </S.Wrapper>
  );
}

export default Showcase;
