import { Story, Meta } from "@storybook/react/types-6-0";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import styled from "styled-components";

import Heading, { HeadingProps } from ".";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

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
          detail:
            "type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined",
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
          detail: "true | false",
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
          detail: "true | false",
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
          summary: "Size",
          detail: "small | medium | huge",
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
          summary: "LineColor",
          detail: "primary | secondary",
        },
      },
    },
    responsiveSize: {
      description: "Responsive heading",
      control: { type: "object" },
      table: {
        category: "logics",
        type: {
          summary: "ResponsiveFontSizes",
          detail: `{
            minFontSizes: number;
            maxFontSizes: number;
            isNoWrapperText?: boolean;
          };`,
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
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<HeadingProps>;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  size: "medium",
};

export const ResponsiveSize: Story<HeadingProps> = (args) => (
  <Heading {...args} />
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
};

ResponsiveSize.args = {
  responsiveSize: {
    minFontSizes: 28,
    maxFontSizes: 200,
    isNoWrapperText: true,
  },
};
