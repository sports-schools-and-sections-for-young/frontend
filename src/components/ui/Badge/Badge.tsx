import { FC } from "react";
import classnames from "classnames";
import styles from "./Badge.module.scss";
import { BadgeProps } from "./types";

const Badge: FC<BadgeProps> = (props) => {
  const { className = "", children, isActive, color, ...rest } = props;

  const BadgeClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles.active]: isActive,
    [styles[color]]: true,
  });

  return (
    <button type="button" className={BadgeClass} {...rest}>
      {children}
    </button>
  );
};

export default Badge;
