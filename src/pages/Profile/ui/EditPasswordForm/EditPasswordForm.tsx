import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { EditFormProps } from "../EditInfoForm/EditInfoForm.tsx";
import styles from "../EditInfoForm/EditInfoForm.module.scss";
import Input from "../../../../components/ui/Input/Input.tsx";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../../components/ui/Icon/types";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import { changePassword } from "../../../../utils/api";

interface EditPassword {
  old_password: string;
  new_password: string;
  check_password: string;
}

const EditPasswordForm: FC<EditFormProps> = ({ setIsEditing }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<EditPassword>({
    mode: "onChange",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [cookies] = useCookies(["token"]);

  const onSubmit: SubmitHandler<EditPassword> = async (body: EditPassword) => {
    try {
      await changePassword(cookies.token, body);
      reset();
      setIsEditing(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("old_password", {
          required: "Введите действующий пароль",
          minLength: {
            value: 5,
            message: "Введите пароль длиной от 5 до 15 символов",
          },
          maxLength: {
            value: 15,
            message: "Введите пароль длиной от 5 до 15 символов",
          },
        })}
        name="old_password"
        placeholder="Пароль *"
        id="old_password"
        type={passwordVisible ? "text" : "password"}
        iconType={InputIcon.EYE}
        iconPosition={InputIconPosition.RIGHT}
        onClickIcon={() => setPasswordVisible(!passwordVisible)}
        hasError={Boolean(errors.old_password)}
        errorMessage={errors.old_password?.message}
      />
      <Input
        {...register("new_password", {
          required: "Введите новый пароль",
          minLength: {
            value: 5,
            message: "Введите пароль длиной от 5 до 15 символов",
          },
          maxLength: {
            value: 15,
            message: "Введите пароль длиной от 5 до 15 символов",
          },
        })}
        name="new_password"
        placeholder="Пароль *"
        id="new_password"
        type={passwordVisible ? "text" : "password"}
        iconType={InputIcon.EYE}
        iconPosition={InputIconPosition.RIGHT}
        onClickIcon={() => setPasswordVisible(!passwordVisible)}
        hasError={Boolean(errors.new_password)}
        errorMessage={errors.new_password?.message}
      />
      <Input
        {...register("check_password", {
          required: "Введите новый пароль повторно",
          validate: (value) =>
            value === getValues("new_password") || "Пароли должны совпадать",
        })}
        name="check_password"
        placeholder="Подтвердить пароль *"
        id="check_password"
        type={passwordVisible ? "text" : "password"}
        iconType={InputIcon.EYE}
        iconPosition={InputIconPosition.RIGHT}
        onClickIcon={() => setPasswordVisible(!passwordVisible)}
        hasError={Boolean(errors.check_password)}
        errorMessage={errors.check_password?.message}
      />
      <Button
        type="submit"
        className={styles.submitButton}
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.OTHER}
      >
        Сохранить <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </form>
  );
};

export default EditPasswordForm;
