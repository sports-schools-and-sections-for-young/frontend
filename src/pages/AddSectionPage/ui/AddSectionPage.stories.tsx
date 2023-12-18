import type { Meta, StoryObj } from "@storybook/react";
import AddSectionPage from "./AddSectionPage";

const meta = {
  title: "pages/AddSectionPage",
  component: AddSectionPage,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof AddSectionPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Result: Story = {
  render: (args) => {
    return <AddSectionPage {...args} />;
  },
  argTypes: {
    isFree: {
      control: "boolean",
    },
  },
};
