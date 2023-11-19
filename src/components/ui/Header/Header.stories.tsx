import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta = {
  title: "ui/Header",
  component: Header,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleHeader: Story = {
  args: {},
};
