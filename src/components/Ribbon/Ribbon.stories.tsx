import { Story, Meta } from "@storybook/react/types-6-0";
import Ribbon, { RibbonProps } from ".";

export default {
  title: "Ribbon",
  component: Ribbon,
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Best seller",
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["normal", "small"],
      control: { type: "select" },
      defaultValue: "normal",
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "centered",
  },
} as Meta<RibbonProps>;

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: "25rem",
      height: "25rem",
      position: "relative",
      background: "#888",
    }}
  >
    <Ribbon {...args} />
  </div>
);
