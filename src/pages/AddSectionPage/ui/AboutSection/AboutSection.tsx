import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { SportSectionProps  } from "../../types";
import AppContext from "../../../../context/AppContext.ts";
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

const AboutSection: FC<SportSectionProps> = () => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  // useEffect(() => {
  //   const isGenderSelected = sectionRequest.gender !== null;
  //   const isAgeRangeValid = sectionRequest.ageFrom <= sectionRequest.ageTo;
  //   setValid(isGenderSelected && isAgeRangeValid);
  // }, [sectionRequest.gender, sectionRequest.ageFrom, sectionRequest.ageTo, setValid]);

  const {
    register,
    formState: { errors },
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
          isActive={sectionRequest.gender === "Woman"}
          onClick={() =>
            setSectionRequest({
              ...sectionRequest,
              gender: sectionRequest.gender === "Woman" ? null : "Woman",
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
          isActive={sectionRequest.gender === "Man"}
          onClick={() =>
            setSectionRequest({
              ...sectionRequest,
              gender: sectionRequest.gender === "Man" ? null : "Man",
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
                ["год", "года", "лет"]
              )}`,
            },
            onChange: (e) =>
              setSectionRequest({ ...sectionRequest, age: +e.target.value }),
          })}
          value={sectionRequest.age || ""}
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
                ["год", "года", "лет"]
              )}`,
            },
            onChange: (e) =>
              setSectionRequest({ ...sectionRequest, age: +e.target.value }),
          })}
          value={sectionRequest.age || ""}
          hasError={Boolean(errors.ageTo)}
          errorMessage={errors.ageTo?.message}
        />
      </div>
    </div>
  );
};

export default AboutSection;
