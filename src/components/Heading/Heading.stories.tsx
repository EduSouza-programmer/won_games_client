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

export const Mobile: Story<HeadingProps> = (args) => (
  <div
    style={{
      maxWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Heading {...args} />
  </div>
);

Mobile.args = {
  children: "Most Populars",
  color: "black",
  size: "small",
  lineColor: "primary",
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
  layout: "fullscreen",
};

export const Desktop: Story<HeadingProps> = (args) => (
  <div
    style={{
      maxWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Heading {...args} />
  </div>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "fullscreen",
};

Desktop.args = {
  children: "Most Populars",
  color: "black",
  size: "small",
  lineColor: "primary",
};
