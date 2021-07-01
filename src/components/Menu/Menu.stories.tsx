import { Story, Meta } from "@storybook/react/types-6-0";

import Menu, { MenuProps } from ".";

export default {
  title: "Components/Menu",
  argTypes: {
    username: {
      description: "If the user exists, hide the sign in button",
      control: { type: "text" },

      table: {
        category: "texts",
        summary: "string",
      },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "won-dark",
    },
  },
  component: Menu,
} as Meta<MenuProps>;

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />;

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />;

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
