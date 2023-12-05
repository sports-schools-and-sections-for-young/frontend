import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StepProps } from "../../types";
import AppContext from "../../../../context/AppContext.ts";
import styles from "./StepAbout.module.scss";
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
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";

interface AgeField {
  age: number;
}

const StepAbout: FC<StepProps> = ({ step, setStep }) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm<AgeField>({ mode: "onChange" });

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        <span className={styles.span}>Для кого</span> будем искать спортивные
        тренировки?
      </h2>
      <p className={styles.subtitle}>
        На нашем ресурсе можно подобрать спортивную секцию для ребенка от 3 до
        18 лет
      </p>
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
      </div>
      <Input
        labelName="Возраст ребёнка"
        type="number"
        className={styles.input}
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
          onChange: (e) =>
            setSectionRequest({ ...sectionRequest, age: +e.target.value }),
        })}
        value={sectionRequest.age || ""}
        hasError={Boolean(errors.age)}
        errorMessage={errors.age?.message}
      />
      <Button
        onClick={() => {
          navigate("/search", { state: { step: step + 1 } });
          setStep(step + 1);
        }}
        className={styles.button}
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.FORWARD}
      >
        Продолжить <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default StepAbout;
