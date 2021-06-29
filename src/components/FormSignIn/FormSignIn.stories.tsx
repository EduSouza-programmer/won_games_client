import { Story, Meta } from "@storybook/react/types-6-0";
import FormSignIn from ".";

export default {
  title: "Components/Forms/FormSignIn",
  component: FormSignIn,
  parameters: {
    viewport: {
      defaultViewport: "figmaMobile",
    },
    layout: "centered",
    controls: { hideNoControlsWarning: true },
  },
} as Meta;

export const Default: Story = () => <FormSignIn />;
