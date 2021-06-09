import { Story, Meta } from "@storybook/react/types-6-0";
import GameCard, { GameCardProps } from ".";

export default {
  title: "GameCard",
  component: GameCard,
  argTypes: {
    promotionalPrice: {
      control: { type: "text" },
    },
    favorite: {
      options: [true, false],
    },
    ribbon: {
      control: { type: "text" },
    },
    ribbonColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    ribbonSize: {
      options: ["normal", "small"],
      control: { type: "select" },
    },
    onFav: { action: "clicked" },
  },
  args: {
    title: "Population Zero",
    developer: "Other Ocean",
    img: "/img/population-zero.jpg",
    price: "R$ 235,00",
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<GameCardProps>;

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

export const PromotionalPrice: Story<GameCardProps> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

PromotionalPrice.args = {
  promotionalPrice: "R$ 190,00",
  ribbon: "20% OFF",
  ribbonColor: "primary",
  ribbonSize: "small",
};
