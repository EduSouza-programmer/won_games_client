import { Story, Meta } from "@storybook/react/types-6-0";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import styled from "styled-components";

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
          summary: "React.ReactNode",
          detail:
            "type ReactNode = boolean | ReactChild | ReactFragment | ReactPortal | null | undefined",
        },
      },
    },
    ribbonSize: {
      description: "Ribbon size ",
      options: ["normal", "small"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "RibbonSizes",
          detail: "normal | small",
        },
      },
    },
    ribbonColor: {
      description: "Ribbon color",
      options: ["primary", "secondary", "red"],
      control: { type: "select" },
      table: {
        category: "choices",
        type: {
          summary: "RibbonColors",
          detail: "primary | secondary | red",
        },
      },
    },
  },
  args: {
    img: "./img/banner-desktop.jpg",
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
      default: "won-dark",
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

const WrapperCenter = styled.div`
  padding: 3rem;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export const Desktop: Story<BannerProps> = (args) => <Banner {...args} />;

Desktop.decorators = [defaultDecorator];
Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
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

DesktopWithRibbon.decorators = [defaultDecorator];
DesktopWithRibbon.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

DesktopWithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "normal",
  ribbonColor: "primary",
};
