import type { Meta, StoryObj } from "@storybook/react";
import CooperationSection from "./CooperationSection";

const meta = {
  title: "sections/CooperationSection",
  component: CooperationSection,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CooperationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cooperation: Story = {
  args: {},
};
