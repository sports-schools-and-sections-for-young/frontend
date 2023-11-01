import { FC, InputHTMLAttributes } from "react";
import classnames from "classnames";
import IconSearch from "../../../assets/images/icons/icon-search.svg";
import styles from "./Input.module.scss";

export enum InputType {
  COMMON = "common",
  SEARCH = "search",
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type: InputType;
}
const Input: FC<InputProps> = (props) => {
  const { type, value, label = "", onChange, ...rest } = props;

  const inputClassName = classnames({
    [styles.input]: true,
  });

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {type === InputType.SEARCH && (
          <img src={IconSearch} alt="Иконка поиска." className={styles.icon} />
        )}
        <input
          {...(label && { id: label })}
          type="text"
          className={inputClassName}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
