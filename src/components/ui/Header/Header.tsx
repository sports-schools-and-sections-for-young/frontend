import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import styles from "./Header.module.scss";
import Heart from "../../../assets/images/icons/heart.svg?react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import logo from "../../../assets/images/Logo.png";

const Header: FC = () => {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState<number>(0);

  const heartClass = classnames({
    [styles.heartBtn]: true,
    [styles.heartBtnActive]: favourite > 0,
  });

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
            size={ImageCardSize.AUTH_LOGO_IMG}
          />
        </Link>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.favouritesBtn}
            onClick={() => navigate("/favourites")}
          >
            <Heart className={heartClass} />
            {favourite > 0 && (
              <span className={styles.favouritesCount}>{favourite}</span>
            )}
            <span className={styles.btnName}>Избранное</span>
          </button>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigate("/signin")}
          >
            <span className={styles.buttonContent}>Вход (для огранизаций)</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
