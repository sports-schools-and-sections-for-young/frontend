import React, { FC } from "react";
import Form from "../../components/Form/Form";
import { useFormValidation } from "../../utils/useFormValidation";
import { REGEX_EMAIL } from "../../utils/variables";
import Input from "../../components/ui/Input/Input";
import cooperation from "../../assets/images/main-image-cooperation.png";

interface RegisterProps {
  onRegister: (data: { name: string; email: string; password: string }) => void;
}

const Register: FC<RegisterProps> = ({ onRegister }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Form
      title="Регистрация"
      buttonText="Зарегистрироваться"
      question="Школа уже зарегистрирована?"
      linkText=" Войти"
      link="/signin"
      handleSubmit={handleRegister}
      banner={cooperation}
      isValid={isValid}
    >
      <Input
        name="email"
        className="form__input"
        placeholder="E-mail *"
        id="email-input"
        type="email"
        onChange={handleChange}
        required
        hasError={!!errors.email} // Проверка наличия ошибки
        errorMessage={errors.email || ""} // Отображение текста ошибки
        value={values.email || ""}
        pattern={REGEX_EMAIL}
      />
      {/* <span className="form__input-error">{errors.email}</span> */}

      <Input
        name="name"
        className="form__input"
        placeholder="Название школы *"
        id="name-input"
        type="text"
        onChange={handleChange}
        required
        minLength={2}
        maxLength={40}
        hasError={!!errors.name} // Проверка наличия ошибки
        errorMessage={errors.name || ""} // Отображение текста ошибки
        value={values.name || ""}
      />
      {/* <span className="form__input-error">{errors.name}</span> */}

      <Input
        name="address"
        className="form__input"
        placeholder="Адрес школы *"
        id="address-input"
        type="text"
        onChange={handleChange}
        required
        minLength={2}
        maxLength={300}
        hasError={!!errors.address} // Проверка наличия ошибки
        errorMessage={errors.address || ""} // Отображение текста ошибки
        value={values.address || ""}
      />
      {/* <span className="form__input-error">{errors.address}</span> */}

      <Input
        name="website"
        className="website__input"
        placeholder="Сайт школы *"
        id="website-input"
        type="text"
        onChange={handleChange}
        required
        minLength={2}
        maxLength={50}
        hasError={!!errors.website} // Проверка наличия ошибки
        errorMessage={errors.website || ""} // Отображение текста ошибки
        value={values.website || ""}
      />
      {/* <span className="form__input-error">{errors.website}</span> */}

      <Input
        name="password"
        className="form__input"
        placeholder="Пароль *"
        id="password-input"
        type="password"
        onChange={handleChange}
        required
        minLength={2}
        maxLength={40}
        hasError={!!errors.password} // Проверка наличия ошибки
        errorMessage={errors.password || ""} // Отображение текста ошибки
        value={values.password || ""}
      />
      {/* <span className="form__input-error">{errors.password}</span> */}

      <Input
        name="repeat-password"
        className="form__input"
        placeholder="Подтвердите пароль *"
        id="repeat-password-input"
        type="password"
        onChange={handleChange}
        required
        minLength={2}
        maxLength={40}
        hasError={!!errors.password} // Проверка наличия ошибки
        errorMessage={errors.password || ""} // Отображение текста ошибки
        value={values.password || ""}
      />

      {/* <span className="form__input-error">{errors.repeat-password}</span> */}
    </Form>
  );
};

export default Register;
