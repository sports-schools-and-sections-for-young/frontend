import type { Meta, StoryObj } from "@storybook/react";
import MainFooter from "./MainFooter";

const meta = {
  title: "sections/MainFooter",
  component: MainFooter,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof MainFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FooterOfMain: Story = {
  args: {},
};
