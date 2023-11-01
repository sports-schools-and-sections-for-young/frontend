import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta = {
  title: "ui/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Чекбокс с текстом",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Обязательный параметр. Используем для title",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCheckbox: Story = {
  args: {
    title: "Есть бесплатное пробное занятие",
  },
};
