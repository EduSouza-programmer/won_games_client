import { Story, Meta } from "@storybook/react/types-6-0";

import items from "./BannerSlider.mock";
import BannerSlider, { BannerSliderProps } from ".";

export default {
  title: "BannerSlider",
  component: BannerSlider,
  argTypes: {
    items: {},
  },
  args: {
    items,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
} as Meta<BannerSliderProps>;

export const Mobile: Story<BannerSliderProps> = (args) => (
  <BannerSlider {...args} />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const Desktop: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <BannerSlider {...args} />
  </div>
);
