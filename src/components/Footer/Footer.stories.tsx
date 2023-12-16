import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer.tsx";

const meta = {
  title: "ui/Footer",
  component: Footer,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkFooter: Story = {
  args: {},
};
