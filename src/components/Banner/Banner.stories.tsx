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
    img: "img/banner-desktop.png",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<BannerProps>;

export const Mobile: Story<BannerProps> = (args) => (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Banner {...args} />
  </div>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "figmaMobile",
  },
  layout: "fullscreen",
};

export const MobileWithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "15px",
    }}
  >
    <Banner {...args} />
  </div>
);

MobileWithRibbon.parameters = {
  viewport: {
    defaultViewport: "figmaMobile",
  },
  layout: "fullscreen",
};

MobileWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
};

export const Desktop: Story<BannerProps> = (args) => (
  <div
    style={{
      minHeight: "100vh",
      maxWidth: "104rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "0 auto",
    }}
  >
    <Banner {...args} />
  </div>
);

export const DesktopWithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      minHeight: "100vh",
      maxWidth: "104rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "0 auto",
      padding: "30px",
    }}
  >
    <Banner {...args} />
  </div>
);

DesktopWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
};
