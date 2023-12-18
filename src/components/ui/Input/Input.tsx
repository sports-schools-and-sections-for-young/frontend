import { v4 as uuidv4 } from "uuid";
import { forwardRef } from "react";
import classnames from "classnames";
import InputLabel from "../InputLabel/InputLabel.tsx";
import InputField, { InputFieldProps } from "../InputField/InputField.tsx";
import styles from "./Input.module.scss";

export interface InputProps extends InputFieldProps {
  labelName?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    labelName = "",
    hasError,
    errorMessage,
    className = "",
    ...rest
  } = props;

  const labelId = `label-${uuidv4()}`;

  const inputClass = classnames({
    [styles.input]: true,
    [className]: true,
  });

  return (
    <div className={inputClass}>
      {labelName && <InputLabel labelId={labelId}>{labelName}</InputLabel>}
      <InputField
        labelId={labelId}
        hasError={hasError}
        errorMessage={errorMessage}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

export default Input;
