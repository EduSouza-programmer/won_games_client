import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import Heading, { HeadingProps } from ".";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    children: {
      type: { required: true },
      description: "Children the component",
      control: { type: "text" },
      table: {
        category: "texts",
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    color: {
      description: "Heading color text",
      options: ["white", "black"],
      control: { type: "radio" },
      table: {
        category: "colors",
        type: {
          summary: "white | black",
        },
      },
    },
    lineLeft: {
      description: "A line on the left side of the heading",
      control: { type: "boolean" },
      table: {
        category: "choices",
        type: {
          summary: "boolean",
        },
      },
    },
    lineBottom: {
      description: "A line on the bottom side of the heading",
      control: { type: "boolean" },
      table: {
        category: "choices",
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      description: "Heading size",
      options: ["small", "medium", "huge"],
      control: { type: "select" },
      table: {
        category: "choices",
        type: {
          summary: "small | medium | huge",
        },
      },
    },
    lineColor: {
      description: "Line color, left or bottom",
      options: ["primary", "secondary"],
      control: { type: "select" },
      table: {
        category: "choices",
        type: {
          summary: "primary | secondary",
        },
      },
    },
    responsiveSize: {
      description: "Responsive heading",
      control: { type: "object" },
      table: {
        category: "logics",
        type: {
          summary:
            "{minFontsizes:number | maxFontSizes:number | isNoWrapperText:boolean}",
          detail: "To work the size property must not be set.",
        },
      },
    },
    as: {
      description: "Polymorphism styled-component",
      control: { type: "null" },
      table: {
        category: "logics",
        type: {
          summary: "React.ElementType",
        },
      },
    },
  },
  args: {
    children: "Most Populars",
    color: "black",
    lineColor: "primary",
    lineBottom: false,
    lineLeft: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    layout: "fullscreen",
  },
} as Meta<HeadingProps>;

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Default: Story<HeadingProps> = (args) => (
  <WrapperCenter>
    <Heading {...args} />
  </WrapperCenter>
);

Default.args = {
  size: "medium",
};

export const ResponsiveSize: Story<HeadingProps> = (args) => (
  <WrapperCenter>
    <Heading {...args} />
  </WrapperCenter>
);

ResponsiveSize.argTypes = {
  size: {
    control: { type: "null" },
  },
  lineColor: {
    control: { type: "null" },
  },
  lineLeft: {
    control: { type: "null" },
  },
  lineBottom: {
    control: { type: "null" },
  },
};

ResponsiveSize.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  layout: "fullscreen",
};

ResponsiveSize.args = {
  responsiveSize: {
    minFontSizes: 28,
    maxFontSizes: 200,
    isNoWrapperText: true,
  },
};
