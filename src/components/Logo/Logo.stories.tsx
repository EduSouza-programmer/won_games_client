import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from ".";

export default {
  title: "Logo",
  component: Logo,
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "radio" },
      defaultValue: "white",
    },
    size: {
      options: ["normal", "large"],
      control: { type: "radio" },
      defaultValue: "normal",
    },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
