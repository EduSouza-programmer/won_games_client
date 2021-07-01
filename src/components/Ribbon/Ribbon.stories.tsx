import { Story, Meta } from "@storybook/react/types-6-0";
import Ribbon, { RibbonProps } from ".";

export default {
  title: "Components/Ribbon",
  component: Ribbon,
  argTypes: {
    children: {
      type: { required: true },
      description: "Write the discount on the ribbon",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    color: {
      description: "Ribbon color",
      options: ["primary", "secondary", "red"],
      control: { type: "radio" },

      table: {
        category: "choices",
        type: {
          summary: "primary | secondary | red",
        },
      },
    },
    size: {
      description: "Ribbon size",
      options: ["normal", "small"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "normal | small",
        },
      },
    },
  },
  args: {
    children: "Best seller",
    color: "primary",
    size: "normal",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "centered",
  },
} as Meta<RibbonProps>;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: "27rem",
      height: "21rem",
      position: "relative",
      background: "#888",
    }}
  >
    <Ribbon {...args} />
  </div>
);
