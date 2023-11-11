import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./CheckboxBtn.module.scss";

export enum CheckboxBtnColor {
  ACTIVE = "active",
}

interface CheckboxBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
}

const CheckboxBtn: FC<CheckboxBtnProps> = (props) => {
  const { className = "", children, isActive, ...rest } = props;

  const checkboxBtnClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.active]: isActive,
  });

  return (
    <button type="button" className={checkboxBtnClass} {...rest}>
      {children}
    </button>
  );
};

export default CheckboxBtn;
