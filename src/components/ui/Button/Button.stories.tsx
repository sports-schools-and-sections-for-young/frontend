import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button.tsx";
import { ButtonColor, ButtonFeature, ButtonHeight, IconSide } from "./types";
import rightArrow from "../../../assets/images/icons/icon-arrow right.svg";
import leftArrow from "../../../assets/images/icons/icon-arrow left.svg";
import cross from "../../../assets/images/icons/X.svg";

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
    feature: ButtonFeature.FORWARD,
    height: ButtonHeight.HIGH,
    color: ButtonColor.PRIMARY,
    icon: rightArrow,
    iconSide: IconSide.RIGHT,
    iconAlt: "Стрелка вправо",
    title: "Продолжить",
    withMinWidth: true,
  },
};

export const Back: Story = {
  args: {
    type: "button",
    feature: ButtonFeature.BACK,
    height: ButtonHeight.HIGH,
    color: ButtonColor.SECONDARY,
    icon: leftArrow,
    iconSide: IconSide.LEFT,
    iconAlt: "Стрелка влево",
    title: "Назад",
    withMinWidth: true,
  },
};

export const Login: Story = {
  args: {
    type: "button",
    feature: ButtonFeature.FORWARD,
    height: ButtonHeight.MEDIUM,
    color: ButtonColor.PRIMARY,
    icon: rightArrow,
    iconSide: IconSide.RIGHT,
    iconAlt: "Стрелка вправо",
    title: "Войти",
  },
};

export const WithoutIcon: Story = {
  args: {
    type: "button",
    feature: ButtonFeature.OTHER,
    height: ButtonHeight.HIGH,
    color: ButtonColor.PRIMARY,
    title: "Пройти квиз!",
    withMinWidth: true,
  },
};

export const Select: Story = {
  args: {
    type: "button",
    feature: ButtonFeature.SELECT,
    height: ButtonHeight.LOW,
    color: ButtonColor.PALE,
    title: "Футбол",
    mainFont: true,
  },
};

export const Cancel: Story = {
  args: {
    type: "button",
    feature: ButtonFeature.CANCEL,
    height: ButtonHeight.LOW,
    color: ButtonColor.PRIMARY,
    icon: cross,
    iconSide: IconSide.RIGHT,
    iconAlt: "Крестик",
    title: "Футбол",
    mainFont: true,
  },
};
