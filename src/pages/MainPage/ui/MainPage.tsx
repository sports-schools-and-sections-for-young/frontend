import { FC } from "react";
import styles from "./MainPage.module.scss";
import ReasonsSection from "../../../components/ReasonsSection/ReasonsSection";
import CooperationSection from "../../../components/CooperationSection/CooperationSection";
import { reasonData } from "../../../utils/constants/reasonsData";

const MainPage: FC = () => {
  return (
    <main className={styles.main}>
      <ReasonsSection reasonArr={reasonData.reasonArr} />
      <CooperationSection />
    </main>
  );
};

export default MainPage;
