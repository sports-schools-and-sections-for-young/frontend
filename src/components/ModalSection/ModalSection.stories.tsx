import type { Meta, StoryObj } from "@storybook/react";
import ModalSection from "./ModalSection.tsx";

const meta = {
  title: "ui/ModalSection",
  component: ModalSection,
  parameters: {},
} satisfies Meta<typeof ModalSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModalSection: Story = {
  args: {
    isEditing: false,
  },
};