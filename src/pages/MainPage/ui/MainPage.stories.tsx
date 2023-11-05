import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
