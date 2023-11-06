import type { Meta, StoryObj } from "@storybook/react";
import ReasonsSection from "./ReasonsSection.tsx";
import { reasonData } from "../../utils/constants/reasonsData";

const meta = {
  title: "sections/ReasonsSection",
  component: ReasonsSection,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof ReasonsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reasons: Story = {
  args: {
    reasonArr: reasonData.reasonArr,
  },
};
