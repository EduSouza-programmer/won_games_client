import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignUp from ".";

export default {
  title: "Components/Forms/FormSignUp",
  component: FormSignUp,
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    layout: "centered",
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Default: Story = () => <FormSignUp />;
