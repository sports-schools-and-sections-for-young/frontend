import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Form.module.scss";
import ImageCard from "../ui/ImageCard/ImageCard";
import { ImageCardSize } from "../ui/ImageCard/types";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon";
import { IconColor, IconTypes } from "../ui/Icon/types";
import SearchHeader from "../../pages/SearchPage/ui/SearchHeader/SearchHeader";

interface FormProps {
  title: string;
  banner: string;
  children: React.ReactNode;
  buttonText: string;
  question: string;
  linkText: string;
  link: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
}

function Form(props: FormProps) {
  const {
    title,
    children,
    banner,
    buttonText,
    question,
    linkText,
    link,
    handleSubmit,
    // isValid,
    ...rest
  } = props;

  const navigate = useNavigate();

  return (
    <main className={styles.form} {...rest}>
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
        <form className={styles.formContent} onSubmit={handleSubmit} noValidate>
          <ImageCard
            size={ImageCardSize.REASON_IMG}
            src={banner}
            alt="Баннер"
          />
          <div className={styles.formColumn}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.formInputs}>{children}</div>
            <Button
              className={styles.formButton}
              onClick={() => {
                /* функция для регистрации */
              }}
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.FORWARD}
            >
              <>
                {buttonText}
                <Icon type={IconTypes.RIGHT_ICON} />
              </>
            </Button>
            <span className={styles.formText}>
              {question}
              <Link to={link} className={styles.formLink}>
                {linkText}
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className={styles.darkPart} />
    </main>
  );
}

export default Form;
