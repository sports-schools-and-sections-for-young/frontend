import { FC, InputHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./InputField.module.scss";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  labelId?: string;
  hasError?: boolean;
  errorMessage?: string;
}
const InputField: FC<InputFieldProps> = (props) => {
  const {
    value,
    labelId = "",
    onChange,
    hasError,
    errorMessage,
    disabled,
    ...rest
  } = props;

  const inputClassName = classnames({
    [styles.input]: true,
    [styles.inputError]: hasError,
    [styles.disabled]: disabled,
  });

  return (
    <div>
      <input
        {...(labelId && { id: labelId })}
        type="text"
        className={inputClassName}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && (
        <strong className={styles.errorMessage}>{errorMessage}</strong>
      )}
    </div>
  );
};

export default InputField;
