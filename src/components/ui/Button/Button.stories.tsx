import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonColor, ButtonSize } from "./Button.tsx";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallPrimary: Story = {
  args: {
    size: ButtonSize.SMALL,
    color: ButtonColor.PRIMARY,
    children: "Кнопка",
  },
};

export const MediumPrimary: Story = {
  args: {
    size: ButtonSize.MEDIUM,
    color: ButtonColor.PRIMARY,
    children: "Кнопка",
  },
};

export const LargePrimary: Story = {
  args: {
    size: ButtonSize.LARGE,
    color: ButtonColor.PRIMARY,
    children: "Кнопка",
  },
};

export const SmallSecondary: Story = {
  args: {
    size: ButtonSize.SMALL,
    color: ButtonColor.SECONDARY,
    children: "Кнопка",
  },
};

export const MediumSecondary: Story = {
  args: {
    size: ButtonSize.MEDIUM,
    color: ButtonColor.SECONDARY,
    children: "Кнопка",
  },
};

export const LargeSecondary: Story = {
  args: {
    size: ButtonSize.LARGE,
    color: ButtonColor.SECONDARY,
    children: "Кнопка",
  },
};
