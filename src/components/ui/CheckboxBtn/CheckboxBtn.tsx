import { FC } from "react";
import classnames from "classnames";
import styles from "./CheckboxBtn.module.scss";
import { CheckboxBtnProps } from "./types";

const CheckboxBtn: FC<CheckboxBtnProps> = (props) => {
  const { className = "", children, isActive, size, ...rest } = props;

  const checkboxBtnClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.active]: isActive,
    [styles[size]]: true,
  });

  return (
    <button
      type="button"
      className={`${checkboxBtnClass} ${styles.CheckboxBtnSize}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CheckboxBtn;
