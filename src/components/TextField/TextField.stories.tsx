import { Story, Meta } from "@storybook/react/types-6-0";
import { Email } from "@styled-icons/material-outlined/Email";

import TextField, { TextFieldProps } from ".";

export default {
  title: "Components/Forms/TextField",
  component: TextField,
  argTypes: {
    labelFor: {
      control: { type: "null" },
      defaultValue: "any",
      table: {
        category: "logics",
      },
    },
    label: {
      defaultValue: "E-mail",
      table: {
        category: "texts",
      },
    },
    error: {
      table: {
        category: "texts",
      },
    },
    icon: {
      control: { type: "null" },
      table: {
        category: "logics",
      },
    },
    iconPosition: {
      options: ["left", "right"],
      control: { type: "select" },
      table: {
        category: "choices",
      },
    },
    onValue: {
      action: "changes",
      table: {
        category: "logics",
      },
    },
    placeholder: {
      table: {
        category: "texts",
      },
    },
    disabled: {
      table: {
        category: "choices",
      },
    },
  },
  args: {
    placeholder: "john.cage@gmail.com",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    layout: "fullscreen",
  },
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => (
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
    <div style={{ width: "25rem" }}>
      <TextField {...args} />
    </div>
  </div>
);

export const WithIcon: Story<TextFieldProps> = (args) => (
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
    <div style={{ width: "27rem" }}>
      <TextField {...args} />
    </div>
  </div>
);

WithIcon.args = {
  icon: <Email />,
};

export const Error: Story<TextFieldProps> = (args) => (
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
    <div style={{ width: "27rem" }}>
      <TextField {...args} />
    </div>
  </div>
);

Error.args = {
  icon: <Email />,
  error: "Ops... something is wrong",
};

export const Disabled: Story<TextFieldProps> = (args) => (
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
    <div style={{ width: "27rem" }}>
      <TextField {...args} />
    </div>
  </div>
);

Disabled.args = {
  disabled: true,
};
