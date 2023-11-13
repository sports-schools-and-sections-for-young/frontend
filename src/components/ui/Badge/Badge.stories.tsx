import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";
import Icon from "../Icon/Icon.tsx";
import { IconColor, IconTypes } from "../Icon/types";

const meta = {
  title: "ui/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "Бейдж",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultBadge: Story = {
  args: {
    type: "button",
    isActive: false,
  },
  render: function Render(args) {
    const [isActive, setIsActive] = useState(false);

    const handleBadgeClick = () => {
      setIsActive(!isActive);
    };

    return (
      <Badge
        {...args}
        type="button"
        isActive={isActive}
        onClick={handleBadgeClick}
      >
        Гимнастика
        {isActive && (
          <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
        )}
      </Badge>
    );
  },
};
