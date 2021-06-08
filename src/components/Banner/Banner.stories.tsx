import { Story, Meta } from "@storybook/react/types-6-0";
import Banner, { BannerProps } from ".";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    ribbon: {
      control: { type: "text" },
    },
    ribbonSize: {
      options: ["normal", "small"],
      control: { type: "select" },
    },
    ribbonColor: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
  args: {
    img: "https://images.unsplash.com/photo-1562229125-6d6075419a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta<BannerProps>;

export const Mobile: Story<BannerProps> = (args) => <Banner {...args} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const MobileWithRibbon: Story<BannerProps> = (args) => (
  <Banner {...args} />
);

MobileWithRibbon.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

MobileWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
};

export const Desktop: Story<BannerProps> = (args) => (
  <div style={{ width: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

export const DesktopWithRibbon: Story<BannerProps> = (args) => (
  <div style={{ width: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

DesktopWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
};
