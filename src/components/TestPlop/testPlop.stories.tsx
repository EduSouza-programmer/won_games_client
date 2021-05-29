import { Story, Meta } from "@storybook/react/types-6-0";
import TestPlop from ".";

export default {
  title: "TestPlop",
  component: TestPlop,
} as Meta;

export const Default: Story = () => <TestPlop />;
