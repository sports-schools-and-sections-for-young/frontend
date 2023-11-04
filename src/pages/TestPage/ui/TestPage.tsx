import { useForm } from "react-hook-form";
import styles from "./TestPage.module.scss";
import Input from "../../../components/ui/Input/Input.tsx";
import { getDeclension } from "../../../utils/functions";
import { maxAge, minAge } from "../../../utils/variables.ts";

interface AddressField {
  street: number;
}

const TestPage = () => {
  const {
    register,
    formState: { errors },
  } = useForm<AddressField>({ mode: "onChange" });

  return (
    <div className={styles.testPage}>
      <Input
        labelName="Улица"
        placeholder="Поиск"
        type="number"
        min="1"
        {...register("street", {
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
        hasError={Boolean(errors.street)}
        errorMessage={errors.street?.message}
      />
    </div>
  );
};

export default TestPage;
