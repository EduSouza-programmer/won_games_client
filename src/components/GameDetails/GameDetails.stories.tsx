import { Story, Meta } from "@storybook/react/types-6-0";
import styled, { css } from "styled-components";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

import GameDetails, { GameDetailsProps } from ".";
import gameDetailsMock from "./GameDetails.mock";

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
  title: "Components/Game/GameDetails",
  component: GameDetails,
  argTypes: {
    developer: {
      type: { required: true },
      description: "Game developer",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    platforms: {
      type: { required: true },
      description: "platform the game can run",
      options: ["windows", "linux", "mac"],
      control: { type: "inline-check" },

      table: {
        category: "choices",
        type: {
          summary: "Platform[]",
          detail: `type Platform = "windows" | "linux" | "mac"`,
        },
      },
    },
    releaseDate: {
      type: { required: true },
      description: "Game release",
      control: { type: "date" },

      table: {
        category: "choices",
        type: {
          summary: "date",
        },
      },
    },
    publisher: {
      type: { required: true },
      description: "Game publisher",
      control: { type: "texts" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    rating: {
      type: { required: true },
      description: "Game rating",
      options: ["BR0", "BR10", "BR12", "BR14", "BR16", "BR18"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "Rating",
          detail: `type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18"`,
        },
      },
    },
    genres: {
      type: { required: true },
      description: "Game genres",
      options: ["Adventure", "Action"],
      control: { type: "inline-check" },

      table: {
        category: "choices",
        type: {
          summary: "string[]",
        },
      },
    },
  },
  args: gameDetailsMock,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<GameDetailsProps>;

export const Default: Story<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
);

export const Desktop: Story<GameDetailsProps> = (args) => (
  <GameDetails {...args} />
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
