import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.tsx";
import { ButtonColor, ButtonTestId } from "./types";
import Icon from "../Icon/Icon.tsx";
import { IconColor, IconTypes } from "../Icon/types";
import styles from "./Button.module.scss";

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

export const Forward: Story = {
  args: {
    type: "button",
    testId: ButtonTestId.FORWARD,
    color: ButtonColor.PRIMARY,
    children: (
      <>
        {" "}
        Продолжить
        <Icon type={IconTypes.RIGHT_ICON} />
      </>
    ),
  },
};

export const Back: Story = {
  args: {
    type: "button",
    testId: ButtonTestId.BACK,
    color: ButtonColor.SECONDARY,
    children: (
      <>
        <Icon type={IconTypes.LEFT_ICON} color={IconColor.SECONDARY} />
        Назад
      </>
    ),
  },
};

export const Login: Story = {
  args: {
    type: "button",
    testId: ButtonTestId.FORWARD,
    color: ButtonColor.PRIMARY,
    className: styles.login,
    children: (
      <>
        {" "}
        Войти
        <Icon type={IconTypes.RIGHT_ICON} />
      </>
    ),
  },
};
