import type { Meta, StoryObj } from "@storybook/react";
import AccordionItem from "./AccordionItem";

const meta = {
  title: "ui/Accordion Item",
  component: AccordionItem,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof AccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionFraction: Story = {
  args: {
    title: "Тестовый заголовок",
    description:
      "Сотрудничество с нами помогает спортивным школам и секциям укрепить свою репутацию, так как мы тщательно отбираем и проверяем партнеров, обеспечивая качество услуг и безопасность для детей.",
    oneChecked: null,
  },
};
