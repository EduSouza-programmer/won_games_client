import { Story, Meta } from "@storybook/react/types-6-0";
import Radio, { RadioProps } from ".";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
    labelFor: {
      control: false,
    },
    onCheck: { action: "checked" },
    value: {
      control: { type: "text" },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "won-dark",
    },
    layout: "fullscreen",
  },
} as Meta<RadioProps>;

export const Default: Story<RadioProps> = (args) => (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        width: "50%",
        height: "10rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Radio
        name="radio"
        label="Maior preço"
        labelFor="maior preço"
        value="primeiro"
        defaultChecked
      />
      <Radio
        name="radio"
        label="Menor preço"
        labelFor="menor preço"
        value="segundo"
      />
      <Radio
        name="radio"
        label="TRY IT"
        labelFor="try it"
        value="try it"
        {...args}
      />
    </div>
  </div>
);
