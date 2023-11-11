import type { Meta, StoryObj } from "@storybook/react";
import GenderBtnPanel from "./GenderBtnPanel";
import { IconTypes } from "../Icon/types";

const meta = {
  title: "ui/GenderBtnPanel",
  component: GenderBtnPanel,
  parameters: {
    docs: {
      description: {
        component: "чекбокс мальчик-девочка",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof GenderBtnPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GenderButtonPanel: Story = {
  args: {
    className: "custom-class",
    btns: [
      { id: 1, title: "девочка", icon: IconTypes.GIRL },
      { id: 2, title: "мальчик", icon: IconTypes.BOY },
    ],
  },
};
