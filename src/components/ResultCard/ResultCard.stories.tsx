import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ResultCard from "./ResultCard.tsx";
import { Section } from "../../types";

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
  latitude: "60.073512",
  longitude: "30.360793",
  gender: "",
  price: 500,
  rating: 2.33,
  review_amount: 3,
  aviable: 88,
  schedule: "Вторник, Четверг, Пятница",
  free_class: false,
  site: "",
};

export const SectionCard: Story = {
  args: { section, favourite: [] },
  render: function Render(args) {
    const [favourite, setFavourite] = useState<Section[]>([]);

    return (
      <ResultCard {...args} favourite={favourite} setFavourite={setFavourite} />
    );
  },
};
