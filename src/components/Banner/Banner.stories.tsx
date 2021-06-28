import { Story, Meta } from "@storybook/react/types-6-0";
import Banner, { BannerProps } from ".";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    img: {
      type: { required: true },
      description: "Image URL for banner",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    title: {
      type: { required: true },
      description: "Banner title",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    subtitle: {
      type: { required: true },
      description: "Banner subtitle",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    buttonLabel: {
      type: { required: true },
      description: "Banner button label",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    buttonLink: {
      type: { required: true },
      description: "Banner button link",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    ribbon: {
      description: "Ribbon discount game",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    ribbonSize: {
      description: "Ribbon size ",
      options: ["normal", "small"],
      control: { type: "select" },

      table: {
        category: "choices",
        tape: {
          summary: "normal | small",
        },
      },
    },
    ribbonColor: {
      description: "Ribbon color",
      options: ["primary", "secondary"],
      control: { type: "select" },
      table: {
        category: "choices",
        type: {
          summary: "primary | secondary",
        },
      },
    },
  },
  args: {
    img: "/img/banner-desktop.jpg",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<BannerProps>;

export const Mobile: Story<BannerProps> = (args) => <Banner {...args} />;

export const MobileWithRibbon: Story<BannerProps> = (args) => (
  <Banner {...args} />
);

MobileWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary",
};

export const Desktop: Story<BannerProps> = (args) => <Banner {...args} />;

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "centered",
};

export const DesktopWithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      padding: "3rem",
    }}
  >
    <Banner {...args} />
  </div>
);

DesktopWithRibbon.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "centered",
};

DesktopWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
};
