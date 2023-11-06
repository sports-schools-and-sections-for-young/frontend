import { FC } from "react";
import styles from "./MainPage.module.scss";
import CooperationSection from "../../../components/CooperationSection/CooperationSection";

const MainPage: FC = () => {
  return (
    <main className={styles.main}>
      <CooperationSection />
    </main>
  );
};

export default MainPage;
