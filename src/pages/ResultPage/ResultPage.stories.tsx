import type { Meta, StoryObj } from "@storybook/react";
import ResultPage from "./ResultPage";

const meta = {
  title: "pages/ResultPage",
  component: ResultPage,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof ResultPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Result: Story = {
  render: (args) => {
    return <ResultPage {...args} />;
  },
  argTypes: {
    isFree: {
      control: "boolean",
    },
    mapView: {
      control: "boolean",
    },
  },
};
