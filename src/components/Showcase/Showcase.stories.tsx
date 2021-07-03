import { Story, Meta } from "@storybook/react/types-6-0";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import styled from "styled-components";

import highlightMock from "@/components/Highlight/Highlight.mock";
import gameCardSliderMock from "@/components/GameCardSlider/GameCardSlider.mock";
import Showcase, { ShowcaseProps } from ".";

export default {
  title: "Components/Showcase",
  component: Showcase,
  argTypes: {
    title: {
      description: "Showcase title",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    highlight: {
      description: "Object highlight",
      control: { type: "object" },

      table: {
        category: "logics",
        type: {
          summary: `HighlightProps`,
          detail: `{
            title: string;
            subtitle: string;
            buttonLabel: string;
            buttonLink: string;
            backgroundImage: string;
            floatImage?: string;
            alignment?: "left" | "right";
          }`,
        },
      },
    },
    gamesSlider: {
      description: "GameCard array",
      control: { type: "object" },

      table: {
        category: "logics",
        type: {
          summary: "GameCardProps[]",
          detail: `{
            title: string;
            developer: string;
            img: string;
            price: string;
            promotionalPrice?: string;
            favorite?: boolean;
            onFav?: () => void;
            ribbon?: React.ReactNode;
            ribbonColor?: RibbonColors;
            ribbonSize?: RibbonSizes;
          }`,
        },
      },
    },
    arrowColorSlider: {
      description:
        "Games slider arrow color, it appears when the screen is bigger than 1440px.",
      control: { type: "select" },
      options: ["white", "black"],

      table: {
        category: "choices",
        type: {
          summary: "Type alias",
          detail: "white | black",
        },
      },
    },
  },
  args: {
    arrowColorSlider: "white",
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
} as Meta<ShowcaseProps>;

const WrapperCenter = styled.div`
  max-width: 130rem;
  margin: 2rem auto 0;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />;

Default.decorators = [defaultDecorator];
Default.args = {
  title: "Em breve",
  highlight: highlightMock,
  gamesSlider: gameCardSliderMock,
};

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutTitle.decorators = [defaultDecorator];
WithoutTitle.args = {
  highlight: highlightMock,
  gamesSlider: gameCardSliderMock,
};

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutHighlight.decorators = [defaultDecorator];
WithoutHighlight.args = {
  gamesSlider: gameCardSliderMock,
  title: "Em breve",
};

export const WithoutGamesSlider: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
);

WithoutGamesSlider.decorators = [defaultDecorator];
WithoutGamesSlider.args = {
  highlight: highlightMock,
  title: "Em breve",
};
