import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import styles from "../Login/Login.module.scss";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import Input from "../../components/ui/Input/Input";
import {
  InputIcon,
  InputIconPosition,
} from "../../components/ui/InputField/types";
import AuthBannerForm from "../../components/ui/AuthBannerForm/AuthBannerForm";
import { registration, handleLogin } from "../../utils/api";
import MainFooter from "../../components/MainFooter/MainFooter";
import { useResize } from "../../hooks/useResize";
import ButtonBackMobile from "../../components/ui/ButtonBackMobile/ButtonBackMobile";
import ImageCard from "../../components/ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../components/ui/ImageCard/types";
import banner from "../../assets/images/auth-mobile-img.png";

export interface IRegister {
  email: string;
  password: string;
  passwordConfirmation: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { isMobileScreen } = useResize();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies(["token"]);

  const onRegisterSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      const registrationResponse = await registration(
        data.email,
        data.password,
        data.passwordConfirmation,
      );
      if (registrationResponse.email) {
        await handleLogin(data.email, data.password, navigate, setCookie);
      }
      reset();
    } catch (error) {
      console.error("Ошибка при регистрации", error);
    }
  };

  return (
    <main className={styles.form}>
      <header className={styles.header}>
        {isMobileScreen ? (
          <ButtonBackMobile
            className={styles.arrowButton}
            onClick={() => navigate("/")}
          />
        ) : (
          <Button
            onClick={() => navigate("/")}
            color={ButtonColor.SECONDARY}
            testId={ButtonTestId.BACK}
          >
            <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
            Назад
          </Button>
        )}
      </header>
      <div className={styles.formContainer}>
        <form
          className={styles.formContent}
          onSubmit={handleSubmit(onRegisterSubmit)}
          noValidate
        >
          {isMobileScreen ? (
            <ImageCard
              size={ImageCardSize.AUTH_MOBILE_IMG}
              src={banner}
              alt="Дети в спортивном зале"
            />
          ) : (
            <AuthBannerForm
              title="Вход для"
              text="Войдите для просмотра и редактирования своих секций"
            />
          )}
          <div className={styles.formColumn}>
            {isMobileScreen ? (
              <h3 className={styles.title}>Регистрация организации</h3>
            ) : (
              <h3 className={styles.title}>Регистрация</h3>
            )}
            <div className={styles.formInputs}>
              <div className={styles.inputWrapper}>
                <Input
                  {...register("email", {
                    required: "Введите E-mail",
                    pattern: {
                      value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                      message: "Введите корректное значение e-mail",
                    },
                  })}
                  name="email"
                  placeholder="E-mail *"
                  id="email-input"
                  type="email"
                  hasError={Boolean(errors.email)}
                  errorMessage={errors.email?.message}
                />
              </div>
              <div className={styles.inputWrapper}>
                <Input
                  {...register("password", {
                    required: "Введите пароль",
                    minLength: {
                      value: 5,
                      message: "Введите пароль длиной от 5 до 15 символов",
                    },
                    maxLength: {
                      value: 15,
                      message: "Введите пароль длиной от 5 до 15 символов",
                    },
                  })}
                  name="password"
                  placeholder="Пароль *"
                  id="password-input"
                  type={passwordVisible ? "text" : "password"}
                  iconType={InputIcon.EYE}
                  iconPosition={InputIconPosition.RIGHT}
                  onClickIcon={() => setPasswordVisible(!passwordVisible)}
                  hasError={Boolean(errors.password)}
                  errorMessage={errors.password?.message}
                />
              </div>

              <div className={styles.inputWrapper}>
                <Input
                  {...register("passwordConfirmation", {
                    required: "Введите пароль повторно",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Пароли должны совпадать",
                  })}
                  name="passwordConfirmation"
                  placeholder="Подтвердить пароль *"
                  id="password-confirmation-input"
                  type={passwordVisible ? "text" : "password"}
                  iconType={InputIcon.EYE}
                  iconPosition={InputIconPosition.RIGHT}
                  onClickIcon={() => setPasswordVisible(!passwordVisible)}
                  hasError={Boolean(errors.passwordConfirmation)}
                  errorMessage={errors.passwordConfirmation?.message}
                />
              </div>
            </div>
            <Button
              className={styles.formButton}
              type="submit"
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.FORWARD}
            >
              <>
                Зарегистрироваться
                <Icon type={IconTypes.RIGHT_ICON} />
              </>
            </Button>
            <span className={styles.formText}>
              Школа уже зарегистрирована?
              <Link to="/signin" className={styles.formLink}>
                Войти
              </Link>
            </span>
          </div>
        </form>
      </div>
      <MainFooter />
    </main>
  );
}

export default Register;
