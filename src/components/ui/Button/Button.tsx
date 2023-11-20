import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import { ButtonColor, ButtonTestId } from "./types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  withMinWidth?: boolean;
  color: ButtonColor;
  testId: ButtonTestId;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className = "",
    withMinWidth = false,
    color,
    testId,
    children,
    ...rest
  } = props;

  const buttonClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.withMinWidth]: withMinWidth,
    [styles[color]]: true,
  });

  return (
    <button
      data-testid={testId}
      type="button"
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
