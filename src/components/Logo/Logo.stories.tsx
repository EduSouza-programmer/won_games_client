import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from ".";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    color: {
      description: "Logo text color",
      options: ["white", "black"],
      control: { type: "radio" },
      table: {
        category: "colors",
        type: {
          summary: "white | black",
        },
      },
    },
    size: {
      description: "Logo size",
      options: ["normal", "large"],
      control: { type: "radio" },
      table: {
        category: "choices",
        type: {
          summary: "normal | large",
        },
      },
    },
    hideOnMobile: {
      description: "When true hides the logo text",
      control: { type: "boolean" },
      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    id: {
      description: "An id to make the logo unique",
      control: { type: "null" },
      table: {
        category: "logics",
        type: {
          summary: "string",
        },
      },
    },
  },
  args: {
    color: "black",
    size: "large",
    hideOnMobile: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "centered",
  },
} as Meta<LogoProps>;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
