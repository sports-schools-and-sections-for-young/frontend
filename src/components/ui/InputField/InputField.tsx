import { forwardRef, InputHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./InputField.module.scss";

import DownArrow from "../../../assets/images/icons/input-caretdown.svg?react";
import UpArrow from "../../../assets/images/icons/input-caretup.svg?react";
import Ruble from "../../../assets/images/icons/input-ruble.svg?react";
import Magnify from "../../../assets/images/icons/inpit-magnifyingmlass.svg?react";
import { InputIcon, InputIconPosition } from "./types";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelId?: string;
  iconType?: InputIcon;
  iconPosition?: InputIconPosition;
  hasError?: boolean;
  errorMessage?: string;
}

const InputIcons = {
  [InputIcon.RUB]: <Ruble className={styles.icon} />,
  [InputIcon.DOWN_ARROW]: <DownArrow className={styles.icon} />,
  [InputIcon.UP_ARROW]: <UpArrow className={styles.icon} />,
  [InputIcon.MAGNIGY]: <Magnify className={styles.icon} />,
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
      ...rest
    } = props;

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

    return (
      <div className={styles.inputWrapper}>
        <input
          {...(labelId && { id: labelId })}
          className={inputClassName}
          ref={ref}
          {...rest}
        />
        {iconType && <span className={inputIcon}>{InputIcons[iconType]}</span>}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default InputField;
