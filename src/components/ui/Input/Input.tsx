import { v4 as uuidv4 } from "uuid";
import { FC, forwardRef } from "react";
import InputLabel from "../InputLabel/InputLabel.tsx";
import InputField, { InputFieldProps } from "../InputField/InputField.tsx";
import styles from "./Input.module.scss";

export interface InputProps extends InputFieldProps {
  labelName: string;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { labelName, hasError, errorMessage, ...rest } = props;

    const labelId = `label-${uuidv4()}`;

    return (
      <div className={styles.input}>
        <InputLabel labelId={labelId}>{labelName}</InputLabel>
        <InputField
          labelId={labelId}
          hasError={hasError}
          errorMessage={errorMessage}
          ref={ref}
          {...rest}
        />
      </div>
    );
  },
);

export default Input;
