import type { Meta, StoryObj } from "@storybook/react";
import ResultCard from "./ResultCard.tsx";

const meta = {
  title: "ui/ResultCard",
  component: ResultCard,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionCard: Story = {
  args: {
    id: 11,
    sport_organization: "СДЮШОР",
    sport_type: "Шахматы",
    title: "Я у мамы молодец",
    address: {
      index: "195276",
      city: "Санкт-Петербург",
      metro: "Ладожская",
      district: "Красногвардейский р-н",
      street: "Ударников",
      house: "34 лит 3",
    },
    gender: "",
    price: 500,
    raiting: 2.33,
    review_amount: 3,
    shedule: {
      days: "Вторник, Четверг, Пятница",
      time: "9.30-11.30",
    },
  },
};
