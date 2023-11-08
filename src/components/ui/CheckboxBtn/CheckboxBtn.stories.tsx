import type { Meta, StoryObj } from "@storybook/react";
import CheckboxBtn from "./CheckboxBtn";

const meta = {
  title: "ui/CheckboxBtn",
  component: CheckboxBtn,
  parameters: {
    docs: {
      description: {
        component: "кнопка составного чекбокса",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxButton: Story = {
  args: {
    type: "button",
    isActive: false,
    children: <> не важно</>,
  },
};
