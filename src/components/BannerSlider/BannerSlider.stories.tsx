import { Story, Meta } from "@storybook/react/types-6-0";

import { BannerProps } from "@/components/Banner";
import BannerSlider, { BannerSliderProps } from ".";

const items: BannerProps[] = [
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x582",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x581",
    title: "Defy death 3",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling",
  },
];

export default {
  title: "BannerSlider",
  component: BannerSlider,
  argTypes: {
    items: {
      control: false,
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
