import type { Meta, StoryObj } from "@storybook/react";
import ImageCard from "./ImageCard";
import { ImageCardSize } from "./types";

const meta = {
  title: "ui/ImageCard",
  component: ImageCard,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderHeaderImage: Story = {
  args: {
    src: "/src/assets/images/slider-image-header.png",
    alt: "Slider header image",
    size: ImageCardSize.SLIDER_HEADER_IMG,
  },
};

export const SliderImage: Story = {
  args: {
    src: "/src/assets/images/slider-image-football.png",
    alt: "Slider image",
    size: ImageCardSize.SLIDER_IMG,
  },
};

export const SearchPageImage: Story = {
  args: {
    src: "/src/assets/images/info-image.png",
    alt: "Search page image",
    size: ImageCardSize.SEARCH_IMG,
  },
};

export const ReasonImage: Story = {
  args: {
    src: "/src/assets/images/main-image-cooperation.png",
    alt: "Reason image",
    size: ImageCardSize.REASON_IMG,
  },
};

export const MainImage: Story = {
  args: {
    src: "/src/assets/images/main-image.png",
    alt: "Main image",
    size: ImageCardSize.MAIN_IMG,
  },
};

export const WhyWeImage: Story = {
  args: {
    src: "/src/assets/images/reason-image-1.png",
    alt: "Why we image",
    size: ImageCardSize.WHY_WE_IMG,
  },
};
