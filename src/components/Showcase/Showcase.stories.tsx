import { Story, Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import Showcase, { ShowcaseProps } from ".";

export default {
  title: "Showcase",
  component: Showcase,
  argTypes: {
    example: {
      description: "",
      control: { type: "" },
      options: ["small", "medium", "large"],

      table: {
        category: "choices",
        type: {
          summary: "small | medium | large",
        },
      },
    },
  },
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "light",
    },
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
} as Meta<ShowcaseProps>;

const WrapperCenter = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

export const Default: Story<ShowcaseProps> = () => (
  <WrapperCenter>
    <Showcase />
  </WrapperCenter>
);
