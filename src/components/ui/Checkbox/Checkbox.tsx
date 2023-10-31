import React, { ChangeEvent, HTMLProps } from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  title: string;
  id: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { className = "", title, name, id, onChange, ...rest } = props;

  const checkboxClass = classnames({
    [className]: true,
    [styles.checkbox]: true,
  });

  return (
    <label className={checkboxClass} htmlFor={id}>
      <input
        className={styles.checkbox__input}
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        {...rest}
      />
      <span className={styles.text}>{title}</span>
    </label>
  );
};

export default Checkbox;
