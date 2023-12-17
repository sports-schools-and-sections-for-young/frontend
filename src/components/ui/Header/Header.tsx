import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classnames from "classnames";
import { useCookies } from "react-cookie";
import styles from "./Header.module.scss";
import Heart from "../../../assets/images/icons/heart.svg?react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import logo from "../../../assets/images/Logo.png";
import Button from "../Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../Button/types";
import ProfileButton from "../ProfileButton/ProfileButton.tsx";

const Header: FC = () => {
  const navigate = useNavigate();
  const [favourite, setFavourite] = useState<number>(0);

  const [cookies] = useCookies(["token"]);

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
          {cookies.token ? (
            <ProfileButton
              className={styles.profileButton}
              onClick={() => navigate("/profile")}
            />
          ) : (
            <Button
              color={ButtonColor.LOGIN}
              testId={ButtonTestId.OTHER}
              className={styles.button}
              onClick={() => navigate("/signin")}
            >
              Вход (для организаций)
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
