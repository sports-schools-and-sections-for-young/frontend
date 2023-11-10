import type { Meta } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import RangeBar from "./RangeBar";
import { IRangeBarProps } from "./rangeBarTypes";

const meta = {
  title: "widgets/RangeBar",
  component: RangeBar,
  args: {
    currentPrice: 2,
    prices: [
      1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5,
      5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 12, 12, 17, 17, 17, 17, 27,
    ],
    setCurrentPrice: () => {},
  },
} as Meta;

export default meta;

export const RangeBarWiget = ({ ...args }: IRangeBarProps) => {
  const [, setArgs] = useArgs();
  const onValueChange = (x: number) => {
    setArgs({ currentPrice: x });
  };

  return <RangeBar {...args} setCurrentPrice={onValueChange} />;
};
