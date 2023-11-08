import type { Meta, StoryObj } from "@storybook/react";
import RangeBar from "./RangeBar";

const meta = {
  title: "widgets/RangeBar",
  component: RangeBar,
} satisfies Meta<typeof RangeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RangeBarWiget: Story = {
  args: {
    value: 1,
    prices: [
      1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9,
      9, 9,
    ],
    setValue: () => {},
  },
};
