import { FC } from "react";
import styles from "./FavouritePage.module.scss";
import Header from "../../../components/ui/Header/Header";
import FavouriteNavigate from "./FavouriteNavigate/FavouriteNavigate";
import FavouriteList from "./FavouriteList/FavouriteList";

const FavouritePage: FC = () => {
  return (
    <>
      <Header />
      <FavouriteNavigate />
      <main className={styles.favourite}>
        <h2 className={styles.title}>Избранное</h2>
        <div className={styles.favouriteContainer}>
          <FavouriteList />
        </div>
      </main>
      <footer className={styles.footer}>{}</footer>
    </>
  );
};

export default FavouritePage;
