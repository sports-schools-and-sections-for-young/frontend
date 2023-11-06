import { forwardRef, InputHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./InputField.module.scss";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelId?: string;
  hasError?: boolean;
  errorMessage?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref) => {
    const { labelId = "", hasError, errorMessage, disabled, ...rest } = props;

    const inputClassName = classnames({
      [styles.input]: true,
      [styles.inputError]: hasError,
      [styles.disabled]: disabled,
    });

    return (
      <div>
        <input
          {...(labelId && { id: labelId })}
          className={inputClassName}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  },
);

export default InputField;
