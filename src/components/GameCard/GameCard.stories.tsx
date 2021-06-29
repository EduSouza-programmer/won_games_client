import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import GameCard, { GameCardProps } from ".";

export default {
  title: "Components/GameCard",
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
    price: {
      type: { required: true },
      description: "GameCarde price game",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    promotionalPrice: {
      description: "Discount price game",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    favorite: {
      description: "Checkbox favorite icon for game",
      options: [true, false],
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
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
          summary: "primary | secondary",
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
          summary: "normal | small",
        },
      },
    },
  },
  args: {
    title: "Population Zero",
    developer: "Other Ocean",
    img: "/img/population-zero.jpg",
    price: "R$ 235,00",
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
  promotionalPrice: "R$ 190,00",
  ribbon: "20% OFF",
  ribbonColor: "primary",
  ribbonSize: "small",
};
