import { ButtonHTMLAttributes, FC } from "react";
import classnames from "classnames";
import UserIcon from "../../../assets/images/icons/UserCircle.svg?react";
import styles from "./ProfileButton.module.scss";

interface ProfileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ProfileButton: FC<ProfileButtonProps> = ({ className = "", ...rest }) => {
  const buttonProps = classnames({
    [styles.button]: true,
    [className]: true,
  });

  return (
    <button className={buttonProps} type="button" {...rest}>
      <UserIcon />
    </button>
  );
};

export default ProfileButton;
