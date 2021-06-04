import { Story, Meta } from "@storybook/react/types-6-0";
import Footer from ".";

export default {
  title: "Footer",
  component: Footer,
} as Meta;

export const Mobile: Story = () => <Footer />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1",
  },
  controls: { hideNoControlsWarning: true },
};

export const Desktop: Story = () => (
  <div
    style={{
      maxWidth: "130rem",
      margin: "0 auto",
    }}
  >
    <Footer />
  </div>
);

Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
  controls: { hideNoControlsWarning: true },
};
