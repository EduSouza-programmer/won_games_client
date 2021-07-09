import { Story, Meta } from "@storybook/react/types-6-0";
import styled, { css } from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import GameInfo, { GameInfoProps } from ".";
import GameInfoMock from "./GameInfo.mock";

const WrapperCenter = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    margin: 0 auto;
    max-width: 120rem;
    height: 100vh;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "GameInfo",
  component: GameInfo,
  argTypes: {
    title: {
      description: "GameInfo title",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    description: {
      description: "GameInfo description",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    gamePrice: {
      description: "GameInfo price",
      control: { type: "object" },

      table: {
        category: "objects",
        type: {
          summary: "PriceProps",
          detail: `(alias) type PriceProps = {
            price: string;
            promotionalPrice?: string | undefined;
        }`,
        },
      },
    },
  },
  args: { ...GameInfoMock },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<GameInfoProps>;

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />;

export const WithPriceDiscount: Story<GameInfoProps> = (args) => (
  <GameInfo {...args} />
);

WithPriceDiscount.args = {
  gamePrice: {
    price: "R$ 235,00",
    promotionalPrice: "R$ 199,00",
  },
};
