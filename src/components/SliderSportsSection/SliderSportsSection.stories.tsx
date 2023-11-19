import type { Meta, StoryObj } from "@storybook/react";
import SliderSportsSection from "./SliderSportsSection.tsx";

const meta = {
  title: "sections/SliderSportsSection",
  component: SliderSportsSection,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof SliderSportsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderSportMain: Story = {
  args: {},
};
