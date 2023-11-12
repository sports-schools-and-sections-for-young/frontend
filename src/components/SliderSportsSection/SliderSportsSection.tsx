import { FC } from "react";
import styles from "./SliderSportsSection.module.scss";
import HeadingIcon from "../ui/HeadingIcon/HeadingIcon";
import { view, headingLevel } from "../ui/HeadingIcon/types";
import Slider from "../Slider/Slider";

const SliderSportsSection: FC = () => {
  return (
    <section className={styles.sliderSection}>
      <HeadingIcon
        headingLevel={headingLevel.H2}
        title="Виды спорта"
        view={view.BLUE}
      />
      <div className={styles.container}>
        <h3 className={styles.title}>
          Подбери спортивную секцию прямо сейчас!
        </h3>
        <Slider />
      </div>
    </section>
  );
};

export default SliderSportsSection;
