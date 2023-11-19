import { FC } from "react";
import styles from "./MainPage.module.scss";
import ReasonsSection from "../../../components/ReasonsSection/ReasonsSection";
import CooperationSection from "../../../components/CooperationSection/CooperationSection";
import AboutSection from "../../../components/AboutSection/AboutSection";
import { reasonData } from "../../../utils/constants/reasonsData";
import SliderSportsSection from "../../../components/SliderSportsSection/SliderSportsSection";
import QuizSection from "../../../components/QuizSection/QuizSection";
import Header from "../../../components/ui/Header/Header.tsx";
import MainFooter from "../../../components/MainFooter/MainFooter.tsx";

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AboutSection />
        <ReasonsSection reasonArr={reasonData.reasonArr} />
        <CooperationSection />
        <SliderSportsSection />
        <QuizSection />
      </main>
      <MainFooter />
    </>
  );
};

export default MainPage;
