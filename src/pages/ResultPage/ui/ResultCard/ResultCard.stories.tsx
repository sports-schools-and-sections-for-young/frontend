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

const section = {
  id: 11,
  sport_organization: "СДЮШОР",
  sport_type: "Шахматы",
  title: "Я у мамы молодец",
  year_from: 3,
  year_until: 9,
  address: {
    index: "195276",
    city: "Санкт-Петербург",
    metro: "Ладожская",
    district: "Красногвардейский р-н",
    street: "Ударников",
    house: "34 лит 3",
  },
  location: [60.073512, 30.360793],
  gender: "",
  price: 500,
  rating: 2.33,
  review_amount: 3,
  aviable: 88,
  schedule: {
    days: ["Вторник", "Четверг", "Пятница"],
    time: "9.30-11.30",
  },
};

export const SectionCard: Story = {
  args: { section },
};
