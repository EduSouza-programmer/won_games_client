import { Story, Meta } from "@storybook/react/types-6-0";
import { Email } from "@styled-icons/material-outlined/Email";

import TextField, { TextFieldProps } from ".";

export default {
  title: "Components/Forms/TextField",
  component: TextField,
  argTypes: {
    label: {
      description: "TextField label",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    labelFor: {
      description: "HTML for linking input label",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "string",
        },
      },
    },
    onValue: {
      description: "Callback function that takes the input value as parameters",
      control: { type: "null" },
      action: "changes",
      table: {
        category: "logics",
        type: {
          summary: "(value?: InputValue) => void",
          detail: "onValue(inputRef.current?.value)",
        },
      },
    },
    icon: {
      description: "TextFiel Icon",
      control: { type: "null" },

      table: {
        category: "logics",
        type: {
          summary: "JSX.Element",
        },
      },
    },
    iconPosition: {
      description: "Icon position on input",
      options: ["left", "right"],
      control: { type: "select" },
      table: {
        category: "choices",
        type: {
          summary: "left | right",
        },
      },
    },
    disabled: {
      description: "Disabled-to-input behavior",
      control: { type: "boolean" },

      table: {
        category: "choices",
        type: {
          summary: "boolean",
          detail: "true | false",
        },
      },
    },
    error: {
      description: "Input appearance in case of error",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    placeholder: {
      description: "Input placeholder",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
  },
  args: {
    label: "Email",
    disabled: false,
    placeholder: "john.cage@gmail.com",
  },
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    layout: "centered",
  },
} as Meta<TextFieldProps>;

export const Default: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const WithIcon: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);

WithIcon.args = {
  icon: <Email />,
};

export const Error: Story<TextFieldProps> = (args) => <TextField {...args} />;

Error.args = {
  icon: <Email />,
  error: "Ops... something is wrong",
};

export const Disabled: Story<TextFieldProps> = (args) => (
  <TextField {...args} />
);

Disabled.args = {
  disabled: true,
};
