import type { Meta, StoryObj } from "@storybook/react";
import AboutSection from "./AboutSection.tsx";

const meta = {
  title: "sections/AboutSection",
  component: AboutSection,
  parameters: {
    parameters: {
      layout: "centered",
    },
  },
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const About: Story = {
  args: {},
};
