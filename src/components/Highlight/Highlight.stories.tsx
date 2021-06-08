import { Story, Meta } from "@storybook/react/types-6-0";
import Highlight, { HighlightProps } from ".";

export default {
  title: "Highlight",
  component: Highlight,
  argTypes: {
    alignment: {
      options: ["left", "right"],
      control: { type: "select" },
    },
  },
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: "Buy now",
    buttonLink: "https://any",
    backgroundImage: "/img/red-dead-img.jpg",
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta<HighlightProps>;

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

export const MobileWithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

MobileWithFloatImage.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
};

MobileWithFloatImage.args = {
  floatImage: "/img/red-dead-float.png",
};

export const Desktop: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
);

export const DesktopWithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Highlight {...args} />
  </div>
);

DesktopWithFloatImage.args = {
  floatImage: "/img/red-dead-float.png",
};
