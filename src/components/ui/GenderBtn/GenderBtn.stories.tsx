import type { Meta, StoryObj } from "@storybook/react";
import GenderBtn from "./GenderBtn";
import Icon from "../Icon/Icon.tsx";
import { IconColor, IconTypes } from "../Icon/types";

const meta = {
  title: "ui/GenderBtn",
  component: GenderBtn,
  parameters: {
    docs: {
      description: {
        component: "кнопка составного чекбокса",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof GenderBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderButton: Story = {
  args: {
    type: "button",
    isActive: false,
    children: (
      <>
        <Icon type={IconTypes.GIRL} color={IconColor.SECONDARY} />
        девочка
      </>
    ),
  },
};
