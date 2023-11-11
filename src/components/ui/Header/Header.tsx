import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { ButtonColor, ButtonTestId } from "../Button/types";
import Icon from "../Icon/Icon";
import { IconTypes } from "../Icon/types";

const Header: FC = () => {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          СпортХаб
        </Link>
        <Button
          className={styles.button}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.OTHER}
        >
          <>
            Войти
            <Icon type={IconTypes.RIGHT_ICON} />
          </>
        </Button>
      </div>
    </header>
  );
};

export default Header;
