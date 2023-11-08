import type { Meta, StoryObj } from "@storybook/react";
import BarItem from "./BarItem";

const meta = {
  title: "widgets/BarItem",
  component: BarItem,
} satisfies Meta<typeof BarItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BarItemWiget: Story = {
  args: {
    barChunk: [{ price: 300 }, { price: 300 }, { price: 300 }],
    value: 10,
    maxHeight: 4,
  },
};
