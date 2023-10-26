import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum ButtonColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size: ButtonSize;
  color: ButtonColor;
}

const Button: FC<ButtonProps> = (props) => {
  const { className = "", children, size, color, ...rest } = props;

  const buttonClass = classnames({
    [styles.button]: true,
    [styles[size]]: true,
    [styles[color]]: true,
    [className]: true,
  });

  return (
    <button type="button" className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
