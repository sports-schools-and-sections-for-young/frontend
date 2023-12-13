import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import Arrow from "../../../assets/images/icons/ArrowLeftPale.svg?react";
import styles from "./ButtonBackMobile.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonBackMobile: FC<ButtonProps> = ({ className = "", ...rest }) => {
  const buttonClasses = classnames({
    [styles.button]: true,
    [className]: true,
  });

  return (
    <button className={buttonClasses} type="button" {...rest}>
      <Arrow />
    </button>
  );
};

export default ButtonBackMobile;
