import { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import SearchClose from "../../../assets/images/icons/SearchClose.svg?react";
import styles from "./CloseButton.module.scss";

interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CloseButton: FC<CloseButtonProps> = (props) => {
  const { className = "", ...rest } = props;

  const buttonClass = classnames({
    [styles.button]: true,
    [className]: true,
  });

  return (
    <button
      className={buttonClass}
      data-testid="CloseButton"
      type="button"
      {...rest}
    >
      <SearchClose />
    </button>
  );
};

export default CloseButton;
