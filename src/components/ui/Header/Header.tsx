import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { ButtonColor, ButtonTestId } from "../Button/types";
import Icon from "../Icon/Icon";
import { IconTypes } from "../Icon/types";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import logo from "../../../assets/images/Logo.png";

const Header: FC = () => {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState<number>(0);

  useEffect(() => {
    function changeCount(e: CustomEvent) {
      setFavourite(e.detail.length);
    }
    document.addEventListener(
      "changedFavourites",
      changeCount as EventListener,
    );
    return () => {
      document.removeEventListener(
        "changedFavourites",
        changeCount as EventListener,
      );
    };
  }, []);

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
            {favourite > 0 && (
              <span className={styles.favouritesCount}>{favourite}</span>
            )}
            <span className={styles.btnName}>Избранное</span>
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
