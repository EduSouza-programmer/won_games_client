import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import items from "./GameCardSlider.mock";
import GameCardSlider, { GameCardSliderProps } from ".";

export default {
  title: "Components/GameCardSlider",
  component: GameCardSlider,
  argTypes: {
    items: {
      type: { required: true },
      description: "GameCard array",
      control: { type: "object" },

      table: {
        category: "logics",
        type: {
          summary: "GameCArdProps[]",
        },
      },
    },
    arrowColor: {
      description: "Arrow Color for Slider",
      options: ["white", "black"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "white | black",
          detail: "Arrows in @media (min-width:1170px)",
        },
      },
    },
  },
  args: {
    items,
    arrowColor: "white",
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
} as Meta<GameCardSliderProps>;

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
  padding-left: 0.8rem;
`;

export const Mobile: Story<GameCardSliderProps> = (args) => (
  <WrapperCenter>
    <GameCardSlider {...args} />
  </WrapperCenter>
);

export const Desktop: Story<GameCardSliderProps> = (args) => (
  <div
    style={{
      maxWidth: "130rem",
      margin: "10rem auto",
      paddingLeft: "0.8rem",
    }}
  >
    <GameCardSlider {...args} />
  </div>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "fullscreen",
};
