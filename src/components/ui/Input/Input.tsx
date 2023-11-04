import { v4 as uuidv4 } from "uuid";
import { FC } from "react";
import InputLabel from "../InputLabel/InputLabel.tsx";
import InputField, { InputFieldProps } from "../InputField/InputField.tsx";

export interface InputProps extends InputFieldProps {
  inputName: string;
}

const Input: FC<InputProps> = (props) => {
  const { inputName, hasError, errorMessage, ...rest } = props;

  const labelId = `label-${uuidv4()}`;

  return (
    <div>
      <InputLabel labelId={labelId}>{inputName}</InputLabel>
      <InputField
        labelId={labelId}
        hasError={hasError}
        errorMessage={errorMessage}
        {...rest}
      />
    </div>
  );
};

export default Input;
