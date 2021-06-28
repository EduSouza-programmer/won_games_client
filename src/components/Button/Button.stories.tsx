import { Story, Meta } from "@storybook/react/types-6-0";
import { AddShoppingCart } from "@styled-icons/material-outlined/AddShoppingCart";
import { FavoriteBorder } from "@styled-icons/material-outlined/FavoriteBorder";
import styled from "styled-components";

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
    size: {
      description: "Multiple choices",
      options: ["small", "medium", "large"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "small | medium | large",
        },
      },
    },
    fullWidth: {
      description: "Boolean",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "true | false",
        },
      },
    },
    icon: {
      description: "Icon SVG",
      control: { type: null },

      table: {
        category: "logics",
        type: {
          summary: "JSX.Element",
        },
      },
    },
    as: {
      description: "Polymorphism styled-components",
      control: { type: null },

      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
    href: {
      description: "Need for polymorphism styled-components",
      control: { type: null },

      table: {
        category: "logics",
        type: {
          summary: "string",
        },
      },
    },
    minimal: {
      description: "Boolean",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "true | false",
        },
      },
    },

    resposiveSizes: {
      description: "Object with sizes, mobile concepts first",
      control: { type: "object" },

      table: {
        category: "choices",
        type: {
          summary: "{small | medium | large}",
        },
      },
    },

    children: {
      description: "Prop children can be anything",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "React.reactNode",
        },
      },
    },
  },
  args: {
    children: "Buy now",
    fullWidth: false,
    minimal: false,
  },
} as Meta;

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

export const Default: Story<ButtonProps> = (args) => (
  <WrapperCenter>
    <Button {...args} />
  </WrapperCenter>
);

export const WithIcon: Story<ButtonProps> = (args) => (
  <WrapperCenter>
    <Button {...args} />
  </WrapperCenter>
);

WithIcon.args = {
  icon: <AddShoppingCart />,
};

export const AsLink: Story<ButtonProps> = (args) => (
  <WrapperCenter>
    <Button {...args} />
  </WrapperCenter>
);

AsLink.args = {
  size: "large",
  as: "a",
  href: "/link",
};

AsLink.argTypes = {
  as: {
    control: false,
  },
  href: {
    control: { type: "text" },
  },
};

export const Minimal: Story<ButtonProps> = (args) => (
  <WrapperCenter>
    <Button {...args} />
  </WrapperCenter>
);

Minimal.args = {
  minimal: true,
  children: "Lista de desejos",
  icon: <FavoriteBorder />,
};

export const Responsive: Story<ButtonProps> = (args) => (
  <WrapperCenter>
    <Button {...args} />
  </WrapperCenter>
);

Responsive.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

Responsive.args = {
  resposiveSizes: { medium: "medium", large: "large" },
};
