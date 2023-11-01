import React, { InputHTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  title: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { className = "", title, name, id, ...rest } = props;

  const checkboxClass = classnames({
    [className]: true,
    [styles.checkbox]: true,
  });

  return (
    <label className={checkboxClass} htmlFor={id}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        id={id}
        {...rest}
      />
      <span className={styles.text}>{title}</span>
    </label>
  );
};

export default Checkbox;
