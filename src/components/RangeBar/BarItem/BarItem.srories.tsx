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
    barChunk: { prices: [300], range: 2 },
    currentPrice: 10,
    maxHeight: 4,
  },
};
