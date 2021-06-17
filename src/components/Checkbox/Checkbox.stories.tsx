import { Story, Meta } from "@storybook/react/types-6-0";
import Checkbox, { CheckboxProps } from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    labelColor: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
    label: {
      defaultValue: "TRY IT",
    },
    labelFor: {
      defaultValue: "TRY IT",
    },
    onCheck: { action: "checked" },
    value: {
      control: false,
    },
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",

    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta<CheckboxProps>;

export const Default: Story<CheckboxProps> = (args) => (
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "50%",
        height: "10rem",
      }}
    >
      <Checkbox label="Action" labelFor="action" isChecked />

      <Checkbox label="Adventure" labelFor="adventure" />

      <Checkbox label="Strategy" labelFor="strategy" />

      <Checkbox {...args} />
    </div>
  </div>
);
