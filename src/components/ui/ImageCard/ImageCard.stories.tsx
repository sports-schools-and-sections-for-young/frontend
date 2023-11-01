import type { Meta, StoryObj } from "@storybook/react";
import ImageCard, { ImageCardSize } from "./ImageCard";

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

export const Small: Story = {
  args: {
    src: "https://images.thevoicemag.ru/upload/img_cache/96b/96bef105d63cde9af3ba25609a340a9d_ce_738x490x0x0_cropped_666x444.jpg",
    alt: "Small Image",
    size: ImageCardSize.SMALL,
  },
};

export const Medium: Story = {
  args: {
    src: "https://images.thevoicemag.ru/upload/img_cache/96b/96bef105d63cde9af3ba25609a340a9d_ce_738x490x0x0_cropped_666x444.jpg",
    alt: "Medium Image",
    size: ImageCardSize.MEDIUM,
  },
};

export const Large: Story = {
  args: {
    src: "https://images.thevoicemag.ru/upload/img_cache/96b/96bef105d63cde9af3ba25609a340a9d_ce_738x490x0x0_cropped_666x444.jpg",
    alt: "Large Image",
    size: ImageCardSize.LARGE,
  },
};

export const ExtraLarge: Story = {
  args: {
    src: "https://images.thevoicemag.ru/upload/img_cache/96b/96bef105d63cde9af3ba25609a340a9d_ce_738x490x0x0_cropped_666x444.jpg",
    alt: "Extra Large Image",
    size: ImageCardSize.EXTRA_LARGE,
  },
};
