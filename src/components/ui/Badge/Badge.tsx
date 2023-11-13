import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./Badge.module.scss";

interface BadgeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive: boolean;
}

const Badge: FC<BadgeProps> = (props) => {
  const { className = "", children, isActive, ...rest } = props;

  const BadgeClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.active]: isActive,
  });

  return (
    <button type="button" className={BadgeClass} {...rest}>
      {children}
    </button>
  );
};

export default Badge;
