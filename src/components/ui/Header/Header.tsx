import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { ButtonColor, ButtonTestId } from "../Button/types";
import Icon from "../Icon/Icon";
import { IconTypes } from "../Icon/types";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import logo from "../../../assets/images/Logo.png";
import { useFavourite } from "../../../hooks/useLocalFavourites";

const Header: FC = () => {
  const navigate = useNavigate();
  const [favourite] = useFavourite();

  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.container}>
        <Link className={styles.logo} to="/">
          <ImageCard
            className={styles.image}
            src={logo}
            alt="Логотип СпортХаб"
            size={ImageCardSize.LOGO_IMG}
          />
        </Link>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.favouritesBtn}
            onClick={() => navigate("/favourites")}
          >
            <span className={styles.favouritesCount}>{favourite.length}</span>
          </button>
          <Button
            className={styles.button}
            color={ButtonColor.PRIMARY}
            testId={ButtonTestId.OTHER}
            onClick={() => navigate("/signin")}
          >
            <>
              Войти
              <Icon type={IconTypes.RIGHT_ICON} />
            </>
          </Button>
          <button
            type="button"
            className={styles.profileButton}
            onClick={() => navigate("/signin")}
          >
            <span className={styles.hiddenText}>Войти</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
