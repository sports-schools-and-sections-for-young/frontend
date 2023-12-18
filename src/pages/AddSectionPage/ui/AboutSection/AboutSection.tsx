import { ChangeEvent, FC } from "react";
import { useForm } from "react-hook-form";
import { SportSectionProps } from "../../types";
import styles from "./AboutSection.module.scss";
import GenderBtn from "../../../../components/ui/GenderBtn/GenderBtn.tsx";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import {
  IconColor,
  IconSize,
  IconTypes,
} from "../../../../components/ui/Icon/types";
import Input from "../../../../components/ui/Input/Input.tsx";
import { maxAge, minAge } from "../../../../utils/variables.ts";
import { getDeclension } from "../../../../utils/functions";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox.tsx";

interface AgeField {
  ageFrom: number;
  ageTo: number;
}

const AboutSection: FC<SportSectionProps> = (props) => {
  const { request, setRequest } = props;

  const multiGenderToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRequest({ ...request, gender: "" });
    } else {
      setRequest({ ...request, gender: "Woman" });
    }
  };

  const {
    register,
    formState: { errors },
    clearErrors,
  } = useForm<AgeField>({ mode: "onChange" });

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        2.
        <span className={styles.span}>&nbsp;Для кого</span> будут тренировки?
      </h2>
      <p className={styles.subtitle}>Выберите пол и возрастной диапазон</p>
      <div className={styles.buttonContainer}>
        <GenderBtn
          isActive={request.gender === "Woman"}
          onClick={() =>
            setRequest({
              ...request,
              gender: request.gender === "Woman" ? "" : "Woman",
            })
          }
        >
          <Icon
            type={IconTypes.GIRL}
            size={IconSize.BIG}
            color={IconColor.SECONDARY}
          />{" "}
          девочка
        </GenderBtn>
        <GenderBtn
          isActive={request.gender === "Man"}
          onClick={() =>
            setRequest({
              ...request,
              gender: request.gender === "Man" ? "" : "Man",
            })
          }
        >
          <Icon
            type={IconTypes.BOY}
            size={IconSize.BIG}
            color={IconColor.SECONDARY}
          />{" "}
          мальчик
        </GenderBtn>
        <Checkbox
          checked={request.gender.length < 1}
          onChange={(e) => multiGenderToggle(e)}
          title="Оба пола"
          className={styles.checkbox}
        />
      </div>
      <div className={styles.ageInputContainer}>
        <Input
          labelName="От"
          type="number"
          className={styles.input}
          {...register("ageFrom", {
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
              message: `Максимальный возраст: ${maxAge} ${getDeclension(
                maxAge,
                ["год", "года", "лет"],
                ["год", "года", "лет"],
              )}`,
            },
            onBlur: () => {
              if (request.year_from < 1 || errors.ageFrom) {
                setRequest({ ...request, year_from: minAge });
                clearErrors();
              }
            },
            onChange: (e) =>
              setRequest({ ...request, year_from: +e.target.value }),
          })}
          value={request.year_from || ""}
          hasError={Boolean(errors.ageFrom)}
          errorMessage={errors.ageFrom?.message}
        />
        <Input
          labelName="До"
          type="number"
          className={styles.input}
          {...register("ageTo", {
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
              message: `Максимальный возраст: ${maxAge} ${getDeclension(
                maxAge,
                ["год", "года", "лет"],
                ["год", "года", "лет"],
              )}`,
            },
            onBlur: () => {
              if (request.year_until < 1 || errors.ageTo) {
                setRequest({ ...request, year_until: maxAge });
                clearErrors();
              }
            },
            onChange: (e) =>
              setRequest({ ...request, year_until: +e.target.value }),
          })}
          value={request.year_until || ""}
          hasError={Boolean(errors.ageTo)}
          errorMessage={errors.ageTo?.message}
        />
      </div>
    </div>
  );
};

export default AboutSection;
