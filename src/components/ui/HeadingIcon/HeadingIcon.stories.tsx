import type { Meta, StoryObj } from "@storybook/react";
import HeadingIcon from "./HeadingIcon";
import { headingLevel, view } from "./types";

const meta = {
  title: "ui/HeadingIcon",
  component: HeadingIcon,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof HeadingIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const White: Story = {
  args: {
    headingLevel: headingLevel.H3,
    title: "Родителям и  спортсменам",
    view: view.WHITE,
  },
};

export const Blue: Story = {
  args: {
    headingLevel: headingLevel.H3,
    title: "Родителям и  спортсменам",
    view: view.BLUE,
  },
};
