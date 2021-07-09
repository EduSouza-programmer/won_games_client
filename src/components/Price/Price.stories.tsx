import { Story, Meta } from "@storybook/react/types-6-0";

import Price, { PriceProps } from ".";

export default {
  title: "Components/Price",
  component: Price,
  argTypes: {
    price: {
      type: { required: true },
      description: "Full product price",
      control: { type: "text" },

      table: {
        category: "texts",
        type: {
          summary: "string",
        },
      },
    },
    promotionalPrice: {
      description: "Full product price",
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
    price: "R$ 190,00",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    backgrounds: {
      default: "light",
    },
    layout: "centered",
  },
} as Meta<PriceProps>;

export const Default: Story<PriceProps> = (args) => <Price {...args} />;

export const WithPromotionalPrice: Story<PriceProps> = (args) => (
  <Price {...args} />
);

WithPromotionalPrice.args = {
  promotionalPrice: "R$ 145,00",
};
