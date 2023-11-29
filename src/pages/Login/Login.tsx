import React from "react";
import Form from "../../components/Form/Form";
import styles from "../../components/Form/Form.module.scss";
import { useFormValidation } from "../../utils/useFormValidation";
import { REGEX_EMAIL } from "../../utils/variables";
import Input from "../../components/ui/Input/Input";
import cooperation from "../../assets/images/main-image-cooperation.png";

interface LoginProps {
  onLogin: (data: { email: string; password: string }) => void;
}

function Login({ onLogin }: LoginProps) {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <Form
      title="Вход"
      buttonText="Войти"
      question="Школа еще не зарегистрирована?"
      linkText=" Регистрация"
      link="/registration"
      handleSubmit={(e) => handleLogin(e)}
      banner={cooperation}
      isValid={isValid}
    >
      <Input
        name="email"
        placeholder="E-mail *"
        id="email-input"
        type="email"
        onChange={handleChange}
        required
        hasError={!!errors.email}
        errorMessage={errors.email || ""}
        value={values.email || ""}
        pattern={REGEX_EMAIL}
      />
      <span className={styles.inputError}>{errors.email}</span>

      <Input
        name="password"
        placeholder="Пароль *"
        id="password-input"
        type="password"
        onChange={handleChange}
        required
        hasError={!!errors.password} // Проверка наличия ошибки
        errorMessage={errors.password || ""} // Отображение текста ошибки
        value={values.password || ""}
      />
      <span className={styles.inputError}>{errors.password}</span>
    </Form>
  );
}

export default Login;
