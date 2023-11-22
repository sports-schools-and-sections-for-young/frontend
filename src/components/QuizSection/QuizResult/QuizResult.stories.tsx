import type { Meta, StoryObj } from "@storybook/react";
import QuizResult from "./QuizResult";

const meta = {
  title: "sections/QuizResult",
  component: QuizResult,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof QuizResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QuizResultPage: Story = {
  args: {},
};
