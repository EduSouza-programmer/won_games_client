import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import GameCard, { GameCardProps } from ".";

export default {
  title: "Components/Game/GameCard",
  component: GameCard,
  argTypes: {
    title: {
      type: { required: true },
      description: "GameCard title",
      control: { type: "text" },

      table: {
        category: "texts",

        type: {
          summary: "string",
        },
      },
    },
    developer: {
      type: { required: true },
      description: "GameCard developer game",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    img: {
      type: { required: true },
      description: "GameCard image",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    gamePrice: {
      type: { required: true },
      description: "GameCard price",
      control: { type: "object" },

      table: {
        category: "objects",
        type: {
          summary: "PriceProps",
          detail: `{
            price: string;
            promotionalPrice?: string;
          }`,
        },
      },
    },
    favorite: {
      description: "Checkbox favorite icon for game",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    onFav: {
      description: "Get/Set value state",
      control: { type: "null" },
      action: "clicked",

      table: {
        category: "logics",
        type: {
          summary: "function",
          detail: "() => void",
        },
      },
    },
    ribbon: {
      description: "Ribbon tag",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "React.ReactNode",
          detail:
            "type ReactNode = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined",
        },
      },
    },
    ribbonColor: {
      description: "Ribbon color",
      options: ["primary", "secondary"],
      control: { type: "radio" },

      table: {
        category: "choices",
        type: {
          summary: "RibbonColors",
          detail: `type RibbonColors = "primary" | "secondary" | "red"`,
        },
      },
    },
    ribbonSize: {
      description: "Ribbon size",
      options: ["normal", "small"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "RibbonSizes",
          detail: `type RibbonSizes = "normal" | "small"`,
        },
      },
    },
  },
  args: {
    title: "Population Zero",
    developer: "Other Ocean",
    img: "/img/population-zero.jpg",
    gamePrice: {
      price: "R$ 235,00",
    },
    favorite: false,
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta<GameCardProps>;

const WrapperCenter = styled.div`
  width: 30rem;
`;

export const Default: Story<GameCardProps> = (args) => (
  <WrapperCenter>
    <GameCard {...args} />
  </WrapperCenter>
);

export const PromotionalPrice: Story<GameCardProps> = (args) => (
  <WrapperCenter>
    <GameCard {...args} />
  </WrapperCenter>
);

PromotionalPrice.args = {
  gamePrice: {
    promotionalPrice: "R$ 190,00",
    price: "R$ 235,00",
  },
  ribbon: "20% OFF",
  ribbonColor: "primary",
  ribbonSize: "small",
};
