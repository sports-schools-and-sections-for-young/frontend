import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider.tsx";

const meta = {
  title: "widgets/Slider",
  component: Slider,
  parameters: {
    // layout: "centered",
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSlider: Story = {
  args: {
  },
};
