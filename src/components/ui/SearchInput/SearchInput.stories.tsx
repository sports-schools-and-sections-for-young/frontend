import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SearchInput, { SearchingItem } from "./SearchInput.tsx";
import { GEOSUGGEST_KEY } from "../../../utils/variables.ts";
import { YandexAnswer } from "../../../types/index.ts";

const sports = [
  {
    id: 1,
    title: "Футбол",
  },
  {
    id: 2,
    title: "Хоккей",
  },
  {
    id: 3,
    title: "Баскетбол",
  },
  {
    id: 4,
    title: "Теннис",
  },
  {
    id: 5,
    title: "Айкидо",
  },
  {
    id: 6,
    title: "Гандбол",
  },
  {
    id: 7,
    title: "Бокс",
  },
  {
    id: 8,
    title: "Дзюдо",
  },
];

const meta = {
  title: "ui/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "600px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SportSearching: Story = {
  args: {
    searchingList: sports,
    placeholder: "Поиск",
    type: "text",
  },
  render: function Render(args) {
    const [item, setItem] = useState<unknown>(null);

    const [searchedSport, setSearchedSport] = useState("");

    const handleItemClick = (sport: unknown) => {
      setItem(sport);
      setSearchedSport("");
    };

    if (item) {
      console.log(item);
    }

    return (
      <SearchInput
        {...args}
        value={searchedSport}
        onChange={(e) => setSearchedSport(e.target.value)}
        itemClickHandler={handleItemClick}
      />
    );
  },
};

export const AddressSearching: Story = {
  args: {
    labelName: "Адрес",
    placeholder: "Поиск",
    type: "text",
    hasFilter: false,
    searchingList: [],
  },
  render: function Render(args) {
    const [searchingAddress, setSearchingAddress] = useState("");

    const [addressList, setAddressList] = useState<SearchingItem[]>([]);

    const handleChange = async (value: string) => {
      setSearchingAddress(value);
      const res = await fetch(
        `https://suggest-maps.yandex.ru/v1/suggest?apikey=${GEOSUGGEST_KEY}&text=${value}&types=locality,street,house&print_address=1`,
      );
      const addresses: YandexAnswer = await res.json();
      if (addresses.results) {
        const formattedAddresses = addresses.results.map((address) => ({
          id: address.distance.value,
          title: address.address.formatted_address,
        }));
        setAddressList(formattedAddresses);
      }
    };

    return (
      <SearchInput
        {...args}
        searchingList={addressList}
        value={searchingAddress}
        onChange={(e) => handleChange(e.target.value)}
        itemClickHandler={(e: SearchingItem) => setSearchingAddress(e.title)}
      />
    );
  },
};
