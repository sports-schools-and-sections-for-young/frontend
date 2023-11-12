import type { Meta, StoryObj } from "@storybook/react";
import QuizSection from "./QuizSection.tsx";

const meta = {
  title: "sections/QuizSection",
  component: QuizSection,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof QuizSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QuizMain: Story = {
  args: {},
};
