import { Story, Meta } from "@storybook/react/types-6-0";
import Heading, { HeadingProps } from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string",
    },
    color: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "select" },
    },
    lineColor: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: "Most Populars",
  color: "black",
  size: "small",
  lineColor: "primary",
};
