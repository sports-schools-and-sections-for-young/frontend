import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion.tsx";
import accordionData from "../../utils/constants/accordionData.ts";

const meta = {
  title: "widgets/Accordion",
  component: Accordion,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionWiget: Story = {
  args: {
    accordionArr: accordionData.accordionArr,
  },
};
