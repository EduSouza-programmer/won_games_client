import { Story, Meta } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
      defaultValue: "Buy now",
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "medium",
    },
    icon: {
      type: "",
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  size: "small",
  children: "Buy Now",
  icon: <AddShoppingCart />,
};
