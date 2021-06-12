import { Story, Meta } from "@storybook/react/types-6-0";

import { GameCardProps } from "@/components/GameCard";
import GameCardSlider, { GameCardSliderProps } from ".";

const items: GameCardProps[] = [
  {
    title: "Poulation Zero 1",
    developer: "Rockstar GAmes",
    img: "img/project-winter-thumb.jpg",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
    ribbon: "10% OFF",
    ribbonSize: "small",
  },
  {
    title: "Poulation Zero 2",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x144",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 3",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x145",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
    ribbon: "30% OFF",
    ribbonSize: "small",
    ribbonColor: "secondary",
  },
  {
    title: "Poulation Zero 4",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x146",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 5",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x147",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 6",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x148",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
    ribbon: "30% OFF",
  },
  {
    title: "Poulation Zero 7",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x149",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
  {
    title: "Poulation Zero 8",
    developer: "Rockstar GAmes",
    img: "https://source.unsplash.com/user/willianjusten/300x150",
    price: "R$ 235,00",
    promotionalPrice: "R$ 215,00",
  },
];

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  argTypes: {
    items: {
      control: false,
    },
    arrowColor: {
      options: ["white", "black"],
      control: { type: "select" },
    },
  },
  args: {
    items,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
  },
} as Meta<GameCardSliderProps>;

export const Desktop: Story<GameCardSliderProps> = (args) => (
  <div
    style={{
      maxWidth: "120rem",
      margin: "15% auto",
    }}
  >
    <GameCardSlider {...args} />
  </div>
);

export const Mobile: Story<GameCardSliderProps> = (args) => (
  <div
    style={{
      margin: "50% auto",
      paddingLeft: "0.8rem",
    }}
  >
    <GameCardSlider {...args} />
  </div>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "figmaMobile",
  },
  controls: { hideNoControlsWarning: true },
};

Mobile.argTypes = {
  arrowColor: {
    control: false,
  },
};
