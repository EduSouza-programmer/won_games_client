import { Story, Meta } from "@storybook/react/types-6-0";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";
import styled from "styled-components";

import highlightMock, {
  highlightExample2,
  highlightExample3,
} from "./Highlight.mock";
import Highlight, { HighlightProps } from ".";

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  max-width: 104rem;
  height: 100vh;
  margin: 0 auto;
`;

const defaultDecorator = (Story: Story): StoryFnReactReturnType => (
  <WrapperCenter>
    <Story />
  </WrapperCenter>
);

export default {
  title: "Components/Highlight",
  component: Highlight,
  argTypes: {
    title: {
      type: { required: true },
      description: "Highlight title",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    subtitle: {
      type: { required: true },
      description: "Hightlight subtitle",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    buttonLabel: {
      type: { required: true },
      description: "Button label",
      control: { type: "text" },

      table: {
        category: "texts",
        summary: "string",
      },
    },
    buttonLink: {
      type: { required: true },
      description: "Button link",
      control: { type: "text" },

      table: {
        category: "texts",
        summary: "string",
      },
    },
    backgroundImage: {
      type: { required: true },
      description: "Highlight background image",
      control: { type: "text" },

      table: {
        category: "texts",
        summary: "string",
      },
    },
    floatImage: {
      description: "Floating highlight image",
      control: { type: "text" },

      table: {
        category: "texts",
        summary: "string",
      },
    },
    alignment: {
      description: "Image alignment in highlight",
      options: ["left", "right"],
      control: { type: "select" },

      table: {
        category: "choices",
        type: {
          summary: "left | right",
        },
      },
    },
  },
  args: { ...highlightMock },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
  decorators: [defaultDecorator],
} as Meta<HighlightProps>;

export const Mobile: Story<HighlightProps> = (args) => <Highlight {...args} />;

export const MobileWithoutFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

MobileWithoutFloatImage.args = {
  floatImage: "",
};

export const Desktop: Story<HighlightProps> = (args) => <Highlight {...args} />;

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const DesktopWithFloatImage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

DesktopWithFloatImage.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
DesktopWithFloatImage.args = {
  floatImage: "",
};

export const Example2: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

Example2.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
Example2.args = {
  ...highlightExample2,
};

export const Example3: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
);

Example3.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
Example3.args = {
  ...highlightExample3,
};
