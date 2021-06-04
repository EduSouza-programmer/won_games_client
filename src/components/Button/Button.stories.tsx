import { Story, Meta } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";

import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
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
      control: false,
    },

    as: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Button {...args} />
  </div>
);

export const WithIcon: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Button {...args} />
  </div>
);

WithIcon.args = {
  children: "Buy Now",
  icon: <AddShoppingCart />,
};

export const AsLink: Story<ButtonProps> = (args) => (
  <div
    style={{
      maxWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Button {...args} />
  </div>
);

AsLink.args = {
  size: "large",
  children: "Buy Now",
  as: "a",
  href: "/link",
};

AsLink.argTypes = {
  as: {
    control: false,
  },
  href: {
    control: false,
  },
};
