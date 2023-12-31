/// <reference types="vite-plugin-svgr/client" />
import { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./Icon.module.scss";
import { IconColor, IconSize, IconTypes } from "./types";

import RightArrow from "../../../assets/images/icons/ArrowRight.svg?react";
import LeftArrow from "../../../assets/images/icons/ArrowLeft.svg?react";
import Person from "../../../assets/images/icons/Person.svg?react";
import Boy from "../../../assets/images/icons/Boy.svg?react";
import Girl from "../../../assets/images/icons/Girl.svg?react";
import Ball from "../../../assets/images/icons/SoccerBall.svg?react";
import Location from "../../../assets/images/icons/MapPin.svg?react";
import Coins from "../../../assets/images/icons/Coins.svg?react";
import Cookie from "../../../assets/images/icons/Cookie.svg?react";
import Cross from "../../../assets/images/icons/X.svg?react";
import Plus from "../../../assets/images/icons/Plus.svg?react";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  type: IconTypes;
  size?: IconSize;
  color?: IconColor;
}

const Icon: FC<IconProps> = (props) => {
  const {
    type,
    size = IconSize.NORMAL,
    color = IconColor.PRIMARY,
    className = "",
  } = props;

  const spanClass = classnames({
    [styles[size]]: true,
  });

  const iconClass = classnames({
    [styles[size]]: true,
    [styles[color]]: true,
    [className]: true,
  });

  const iconImages = {
    [IconTypes.RIGHT_ICON]: (
      <RightArrow
        className={type === IconTypes.RIGHT_ICON ? "arrow-icon" : ""}
      />
    ),
    [IconTypes.LEFT_ICON]: (
      <LeftArrow className={type === IconTypes.LEFT_ICON ? "arrow-icon" : ""} />
    ),
    [IconTypes.PERSON]: <Person className={iconClass} />,
    [IconTypes.BOY]: <Boy className={iconClass} />,
    [IconTypes.GIRL]: <Girl className={iconClass} />,
    [IconTypes.BALL]: <Ball className={iconClass} />,
    [IconTypes.LOCATION]: <Location className={iconClass} />,
    [IconTypes.COINS]: <Coins className={iconClass} />,
    [IconTypes.COOKIE]: <Cookie className={iconClass} />,
    [IconTypes.CROSS]: <Cross className={iconClass} />,
    [IconTypes.PLUS]: <Plus className={iconClass} />,
  };

  return <span className={spanClass}>{iconImages[type]}</span>;
};

export default Icon;
