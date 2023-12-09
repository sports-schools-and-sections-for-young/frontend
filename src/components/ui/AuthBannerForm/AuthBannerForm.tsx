import { FC } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import styles from "./AuthBannerForm.module.scss";
import logo from "../../../assets/images/Logo.png";
import auth from "../../../assets/images/main-image-cooperation.png";

interface AuthBannerProps {
  title: string;
  text: string;
}

const AuthBannerForm: FC<AuthBannerProps> = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <ImageCard
          className={styles.image}
          src={logo}
          alt="Логотип СпортХаб"
          size={ImageCardSize.AUTH_LOGO_IMG}
        />
      </Link>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>
          {title} <span className={styles.orangeTitle}>спортивных школ</span>{" "}
        </h2>
        <span className={styles.text}>{text}</span>
      </div>

      <ImageCard
        className={styles.image}
        src={auth}
        alt="Дети с мячами"
        size={ImageCardSize.AUTH_IMG}
      />
    </div>
  );
};

export default AuthBannerForm;
