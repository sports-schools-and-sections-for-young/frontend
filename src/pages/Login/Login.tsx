import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Login.module.scss";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import SearchHeader from "../SearchPage/ui/SearchHeader/SearchHeader";
import Input from "../../components/ui/Input/Input";
import AuthBannerForm from "../../components/ui/AuthBannerForm/AuthBannerForm";

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

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(`email => ${data.email}   password => ${data.password}`);
    console.log("data =>", data);
    reset();
  };

  return (
    <main className={styles.form}>
      <SearchHeader>
        <Button
          onClick={() => navigate("/")}
          color={ButtonColor.SECONDARY}
          testId={ButtonTestId.BACK}
        >
          <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
          Назад
        </Button>
      </SearchHeader>
      <div className={styles.formContainer}>
        <form
          className={styles.formContent}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <AuthBannerForm
            title="Вход для"
            text="Войдите для просмотра и редактирования своих секций"
          />
          <div className={styles.formColumn}>
            <h3 className={styles.title}>Вход</h3>
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
      <div className={styles.darkPart} />
    </main>
  );
}

export default Login;
