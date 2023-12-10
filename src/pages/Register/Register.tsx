import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../Login/Login.module.scss";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import SearchHeader from "../SearchPage/ui/SearchHeader/SearchHeader";
import Input from "../../components/ui/Input/Input";
import AuthBannerForm from "../../components/ui/AuthBannerForm/AuthBannerForm";
import Footer from "../../components/ui/Footer/Footer";

export interface IRegister {
  email: string;
  name: string;
  address: string;
  site: string;
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

  const onSubmit: SubmitHandler<IRegister> = (data) => {
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
            title="Регистрация для"
            text="Зарегистрируйте спортнивную школу и Вы сможете добавлять секции"
          />
          <div className={styles.formColumn}>
            <h3 className={styles.title}>Регистрация</h3>
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
                  type="password"
                />
                {errors?.password && (
                  <span className={styles.inputError}>
                    {errors.password.message}
                  </span>
                )}
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
                  placeholder="Подтвердить пароля *"
                  id="password-confirmation-input"
                  type="password"
                />
                {errors?.passwordConfirmation && (
                  <span className={styles.inputError}>
                    {errors.passwordConfirmation.message}
                  </span>
                )}
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
      <Footer />
    </main>
  );
}

export default Register;
