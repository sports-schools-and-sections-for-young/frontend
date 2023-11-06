import type { Meta, StoryObj } from "@storybook/react";
import Reason from "./Reason.tsx";
import reasonImage from "../../../assets/images/icons/reason-diversity.png";

const meta = {
  title: "ui/Reason",
  component: Reason,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof Reason>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReasonItem: Story = {
  args: {
    title: "Разнообразие",
    about: "Вы точно подберете секцию для вашего ребенка",
    description:
      "Большой выбор спортивных школ, и секций представленных на СпортХаб  удовлетворит интересы и потребности любого ребенка. ",
    img: reasonImage,
  },
};
