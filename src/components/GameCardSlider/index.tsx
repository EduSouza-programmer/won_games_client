import { ArrowBackIos as ArrowLeft } from "@styled-icons/material-outlined/ArrowBackIos";
import { ArrowForwardIos as ArrowRight } from "@styled-icons/material-outlined/ArrowForwardIos";

import GameCard, { GameCardProps } from "@/components/GameCard";
import Slider, { SliderSettings } from "@/components/Slider";
import * as S from "./GameCardSlider.styles";

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: "ondemand",
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        arrows: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.1,
        arrows: false,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 2.2,
        arrows: false,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1.2,
        arrows: false,
      },
    },
    {
      breakpoint: 619,
      settings: {
        slidesToShow: 1.4,
        arrows: false,
      },
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1.2,
        arrows: false,
      },
    },
    {
      breakpoint: 370,
      settings: {
        slidesToShow: 1.1,
        arrows: false,
      },
    },
  ],
};

export type GameCardSliderProps = {
  items: GameCardProps[];
  arrowColor?: "white" | "black";
};

function GameCardSlider({ items, arrowColor = "white" }: GameCardSliderProps) {
  return (
    <S.Wrapper arrowColor={arrowColor}>
      <Slider settings={settings}>
        {items.map((item) => (
          <GameCard key={item.title} {...item} />
        ))}
      </Slider>
    </S.Wrapper>
  );
}

export default GameCardSlider;
