import { Story, Meta } from "@storybook/react/types-6-0";

import items from "./GameCardSlider.mock";
import GameCardSlider, { GameCardSliderProps } from ".";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  argTypes: {
    items: {},
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
