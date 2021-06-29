import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";

import items from "./BannerSlider.mock";
import BannerSlider, { BannerSliderProps } from ".";

export default {
  title: "Components/BannerSlider",
  component: BannerSlider,
  argTypes: {
    items: {
      type: { required: true },
      description: "Banner array",
      control: { type: "object" },

      table: {
        category: "logics",
        type: {
          summary: "BannerProps[]",
        },
      },
    },
  },
  args: {
    items,
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
} as Meta<BannerSliderProps>;

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  height: 100vh;
  max-width: 104rem;
  margin: 0 auto;
`;

export const Mobile: Story<BannerSliderProps> = (args) => (
  <WrapperCenter>
    <BannerSlider {...args} />
  </WrapperCenter>
);

export const Desktop: Story<BannerSliderProps> = (args) => (
  <WrapperCenter>
    <BannerSlider {...args} />
  </WrapperCenter>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};
