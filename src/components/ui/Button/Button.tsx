import { FC } from "react";
import classnames from "classnames";
import styles from "./Button.module.scss";
import { ButtonFeature, ButtonProps, IconSide } from "./types";

const Button: FC<ButtonProps> = (props) => {
  const {
    className = "",
    height,
    withMinWidth = false,
    color,
    icon = null,
    iconSide = "",
    iconAlt = "",
    mainFont = false,
    feature,
    title,
    ...rest
  } = props;

  const buttonClass = classnames({
    [className]: true,
    [styles.button]: true,
    [styles[height]]: true,
    [styles.withMinWidth]: withMinWidth,
    [styles[color]]: true,
    [styles.withLeftIcon]: iconSide === IconSide.LEFT,
    [styles.withRightIcon]: iconSide === IconSide.RIGHT,
    [styles.mainFont]: mainFont,
  });

  const iconClass = classnames({
    [styles[iconSide]]: true,
    [styles.iconPadding]: feature === ButtonFeature.CANCEL,
  });

  return (
    <button
      data-testid={feature}
      type="button"
      className={buttonClass}
      {...rest}
    >
      {icon && iconSide === IconSide.LEFT && (
        <img src={icon} alt={iconAlt} className={iconClass} />
      )}
      <span className={styles.text}>{title}</span>
      {icon && iconSide === IconSide.RIGHT && (
        <img src={icon} alt={iconAlt} className={iconClass} />
      )}
    </button>
  );
};

export default Button;
