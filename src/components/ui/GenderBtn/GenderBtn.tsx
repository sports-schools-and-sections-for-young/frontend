import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./GenderBtn.module.scss";

interface GenderBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
}

const GenderBtn: FC<GenderBtnProps> = (props) => {
  const { className = "", children, isActive, ...rest } = props;

  const genderBtnClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.active]: isActive,
  });

  return (
    <button type="button" className={genderBtnClass} {...rest}>
      {children}
    </button>
  );
};

export default GenderBtn;
