import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import Input from "../../components/ui/Input/Input";
import AuthBannerForm from "../../components/ui/AuthBannerForm/AuthBannerForm";
import { login } from "../../utils/api";
import MainFooter from "../../components/MainFooter/MainFooter";
import { useResize } from "../../hooks/useResize";
import ButtonBackMobile from "../../components/ui/ButtonBackMobile/ButtonBackMobile";
import ImageCard from "../../components/ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../components/ui/ImageCard/types";
import banner from "../../assets/images/auth-mobile-img.png";

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
  const { isMobileScreen } = useResize();

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    console.log(`email => ${data.email}   password => ${data.password}`);
    console.log("data =>", data);

    try {
      const response = await login(data.email, data.password);
      // Здесь можно обработать ответ от сервера, например, проверить успешность входа
      console.log("Ответ сервера:", response);
      // Возможно, здесь нужно установить состояние loggedIn на основе ответа
      // setLoggedIn(true);
      // Перенаправление пользователя, если вход успешен
      // navigate('/dashboard'); // Замените '/dashboard' на нужный путь
    } catch (error) {
      // Обработка ошибок, например, вывод ошибки в консоль
      console.error("Ошибка входа:", error);
    }

    reset();
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
          onSubmit={handleSubmit(onSubmit)}
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
                      value: /[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}/,
                      message: "Введите корректное значение e-mail",
                    },
                  })}
                  name="email"
                  placeholder="E-mail *"
                  id="email-input"
                  type="email"
                />
                {errors?.email && (
                  <span className={styles.inputError}>
                    {errors.email.message}
                  </span>
                )}
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
                  type="password"
                />
                {errors?.password && (
                  <span className={styles.inputError}>
                    {errors.password.message}
                  </span>
                )}
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
            <hr className={styles.horizontalLine} />
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
