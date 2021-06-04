import { Story, Meta } from "@storybook/react/types-6-0";

import Menu, { MenuProps } from ".";

export default {
  title: "Menu",
  component: Menu,
} as Meta;

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
  layout: "fullscreen",
  backgrounds: {
    default: "dark",
  },
};

export const Desktop: Story<MenuProps> = (args) => (
  <div
    style={{
      maxWidth: "130rem",
      margin: "0 auto",
    }}
  >
    <Menu {...args} />
  </div>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "fullscreen",
  backgrounds: {
    default: "dark",
  },
};
