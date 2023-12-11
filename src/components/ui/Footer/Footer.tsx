import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import ImageCard from "../ImageCard/ImageCard";
import { ImageCardSize } from "../ImageCard/types";
import logo from "../../../assets/images/logo-white.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.darkPart}>
        <div className={styles.footerContainer}>
          <div className={styles.textWrapper}>
            <p>
              Используя сервис, вы даете согласие на обработку персональных
              данных и соглашаетесь с Пользовательским соглашением и Политикой
              конфиденциальности СпортХаб и Политикой сайта в области
              использования cookie файлов.
            </p>
            <span className={styles.spanText}>ⓒ 2023 Все права защищены</span>
          </div>
          <Link className={styles.logo} to="/">
            <ImageCard
              className={styles.image}
              src={logo}
              alt="Логотип СпортХаб"
              size={ImageCardSize.AUTH_LOGO_IMG}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
