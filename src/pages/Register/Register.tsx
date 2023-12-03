import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../Login/Login.module.scss";
import ImageCard from "../../components/ui/ImageCard/ImageCard";
import { ImageCardSize } from "../../components/ui/ImageCard/types";
import Button from "../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import Icon from "../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import SearchHeader from "../SearchPage/ui/SearchHeader/SearchHeader";
import Input from "../../components/ui/Input/Input";
import cooperation from "../../assets/images/auth-img.svg";

export interface IAddress {
  index: string;
  city: string;
  metro: string;
  district: string;
  street: string;
  house: string;
}

export interface IRegister {
  email: string;
  name: string;
  address: IAddress;
  site: string;
  password: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    console.log(`
      email => ${data.email}
      name => ${data.name}
      address => ${data.address}
      site => ${data.site}
      password => ${data.password}
      `);
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
          <ImageCard
            size={ImageCardSize.AUTH_IMG}
            src={cooperation}
            alt="Баннер"
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
                  {...register("name", {
                    required: "Введите наименование спортивной организации",
                    minLength: {
                      value: 5,
                      message: "Поле должно содержать от 5 до 200 символов",
                    },
                    maxLength: {
                      value: 200,
                      message: "Поле должно содержать от 5 до 200 символов",
                    },
                  })}
                  name="name"
                  placeholder="Название школы *"
                  id="name-input"
                  type="text"
                />
                {errors?.name && (
                  <span className={styles.inputError}>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <Input
                  {...register("address", {
                    required: "Введите: индекс, город, район, улица, дом",
                    minLength: {
                      value: 10,
                      message: "Введите: индекс, город, район, улица, дом",
                    },
                    maxLength: {
                      value: 200,
                      message: "Введите: индекс, город, район, улица, дом",
                    },
                  })}
                  name="address"
                  placeholder="Адрес школы *"
                  id="address-input"
                  type="text"
                />
                {errors?.address && (
                  <span className={styles.inputError}>
                    {errors.address.message}
                  </span>
                )}
              </div>

              <div className={styles.inputWrapper}>
                <Input
                  {...register("site", {
                    required: "Введите сайт спортивной организации",
                    pattern: {
                      value:
                        /^https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}(\.[a-z]{2,})?$/,
                      message: "Введите сайт в формате https://www.example.com",
                    },
                  })}
                  name="site"
                  placeholder="Сайт школы *"
                  id="site-input"
                  type="text"
                />
                {errors?.site && (
                  <span className={styles.inputError}>
                    {errors.site.message}
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

              <div className={styles.inputWrapper}>
                <Input
                  {...register("password", {
                    required: "Введите пароль повторно",
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
                  placeholder="Подтверждение пароля *"
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
      <div className={styles.darkPart} />
    </main>
  );
}

export default Register;
