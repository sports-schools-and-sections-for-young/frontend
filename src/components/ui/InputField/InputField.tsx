import { useState, forwardRef, InputHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./InputField.module.scss";

import DownArrow from "../../../assets/images/icons/input-caretdown.svg?react";
import UpArrow from "../../../assets/images/icons/input-caretup.svg?react";
import Ruble from "../../../assets/images/icons/input-ruble.svg?react";
import Magnify from "../../../assets/images/icons/inpit-magnifyingmlass.svg?react";
import Eye from "../../../assets/images/icons/Eye.svg?react";
import { InputIcon, InputIconPosition } from "./types";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelId?: string;
  iconType?: InputIcon;
  iconPosition?: InputIconPosition;
  hasError?: boolean;
  errorMessage?: string;
  onClickIcon?: () => void;
}

const InputIcons = {
  [InputIcon.RUB]: <Ruble className={styles.icon} />,
  [InputIcon.DOWN_ARROW]: <DownArrow className={styles.icon} />,
  [InputIcon.UP_ARROW]: <UpArrow className={styles.icon} />,
  [InputIcon.MAGNIGY]: <Magnify className={styles.icon} />,
  [InputIcon.EYE]: <Eye className={styles.icon} />,
};

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const {
      labelId = "",
      iconType = null,
      iconPosition = "",
      hasError,
      errorMessage,
      disabled,
      onClickIcon,
      ...rest
    } = props;

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const inputClassName = classnames({
      [styles.input]: true,
      [styles[`input-${iconPosition}`]]: iconPosition.length > 0,
      [styles.inputError]: hasError,
      [styles.disabled]: disabled,
    });

    const inputIcon = classnames({
      [styles.icon]: true,
      [styles[iconPosition]]: true,
    });

    const handleIconClick = () => {
      if (onClickIcon) {
        onClickIcon();
      }
      setPasswordVisible((prevState: boolean) => !prevState);
    };

    return (
      <div className={styles.inputWrapper}>
        <input
          {...(labelId && { id: labelId })}
          className={inputClassName}
          ref={ref}
          {...rest}
          type={
            rest.type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : rest.type
          }
        />
        {iconType && (
          <div
            className={inputIcon}
            onClick={handleIconClick}
            role="button"
            tabIndex={0}
            aria-label="Показать/скрыть пароль"
          >
            {InputIcons[iconType]}
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default InputField;
