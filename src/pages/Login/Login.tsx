import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import classnames from "classnames";
import styles from "./Login.module.scss";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import {
  InputIcon,
  InputIconPosition,
} from "../../components/ui/InputField/types";
import Input from "../../components/ui/Input/Input";
import AuthBannerForm from "../../components/ui/AuthBannerForm/AuthBannerForm";
import MainFooter from "../../components/MainFooter/MainFooter";
import { useResize } from "../../hooks/useResize";
import ButtonBackMobile from "../../components/ui/ButtonBackMobile/ButtonBackMobile";
import ImageCard from "../../components/ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../components/ui/ImageCard/types";
import banner from "../../assets/images/auth-mobile-img.png";
import { handleLogin } from "../../utils/api";
import { ResponseType } from "../../utils/api/types";
import { LoginErrors } from "./types";

interface ILogin {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { isMobileScreen } = useResize();

  const [error, setError] = useState<LoginErrors | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies(["token"]);

  const onLoginSubmit: SubmitHandler<ILogin> = async (data) => {
    setError(null);
    const res = await handleLogin(
      data.email,
      data.password,
      navigate,
      setCookie,
    );
    if (res === ResponseType.ERROR) {
      setError(LoginErrors.ERROR);
    } else if (res === ResponseType.WRONG) {
      setError(LoginErrors.WRONG);
    } else reset();
  };

  const lineClass = classnames({
    [styles.horizontalLine]: true,
    [styles.horizontalLine_error]: Boolean(error),
  });

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
          onSubmit={handleSubmit(onLoginSubmit)}
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
              <h3 className={styles.title}>Вход для организаций</h3>
            ) : (
              <h3 className={styles.title}>Вход</h3>
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
                      message:
                        "Длина пароля должна составлять от 5 до 15 символов",
                    },
                    maxLength: {
                      value: 15,
                      message:
                        "Длина пароля должна составлять от 5 до 15 символов",
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
            </div>

            <div className={styles.buttonWrapper}>
              <div className={styles.buttonRow}>
                <Button
                  className={styles.loginButton}
                  type="submit"
                  color={ButtonColor.PRIMARY}
                  testId={ButtonTestId.FORWARD}
                >
                  <>
                    Войти
                    <Icon type={IconTypes.RIGHT_ICON} />
                  </>
                </Button>
                <Link
                  to="/signin"
                  className={styles.forgotPassword}
                  onClick={() => {
                    alert(
                      "Скоро здесь будет функционал восстановления забытого пароля",
                    );
                  }}
                >
                  Забыли пароль?
                </Link>
              </div>
            </div>
            {error && <span className={styles.error}>{error}</span>}
            <hr className={lineClass} />
            <span className={styles.formText}>
              Школа еще не зарегистрирована?
              <Link to="/registration" className={styles.formLink}>
                Регистрация
              </Link>
            </span>
          </div>
        </form>
      </div>
      <MainFooter />
    </main>
  );
}

export default Login;
