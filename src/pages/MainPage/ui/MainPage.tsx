import { FC } from "react";
import styles from "./MainPage.module.scss";
import ReasonsSection from "../../../components/ReasonsSection/ReasonsSection";
import CooperationSection from "../../../components/CooperationSection/CooperationSection";
import AboutSection from "../../../components/AboutSection/AboutSection";
import { reasonData } from "../../../utils/constants/reasonsData";
import SliderSportsSection from "../../../components/SliderSportsSection/SliderSportsSection";
import QuizSection from "../../../components/QuizSection/QuizSection";

const MainPage: FC = () => {
  return (
    <main className={styles.main}>
      <AboutSection />
      <ReasonsSection reasonArr={reasonData.reasonArr} />
      <CooperationSection />
      <SliderSportsSection />
      <QuizSection />
    </main>
  );
};

export default MainPage;
