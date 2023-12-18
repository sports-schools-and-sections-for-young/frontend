import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import Input from "./Input.tsx";
import { maxAge, minAge } from "../../../utils/variables.ts";
import { getDeclension } from "../../../utils/functions";

interface AgeField {
  age: number;
}

const meta = {
  title: "ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChildAge: Story = {
  args: {
    labelName: "Возраст ребёнка",
    placeholder: "От 3 до 16 лет",
    type: "number",
    min: minAge,
  },
  render: function Render(args) {
    const {
      register,
      formState: { errors },
    } = useForm<AgeField>({ mode: "onChange" });
    return (
      <Input
        {...args}
        {...register("age", {
          min: {
            value: minAge,
            message: `Минимальный возраст: ${minAge} ${getDeclension(minAge, [
              "год",
              "года",
              "лет",
            ])}`,
          },
          max: {
            value: maxAge,
            message: `Максимальный возраст: ${maxAge} ${getDeclension(maxAge, [
              "год",
              "года",
              "лет",
            ])}`,
          },
        })}
        hasError={Boolean(errors.age)}
        errorMessage={errors.age?.message}
      />
    );
  },
};
