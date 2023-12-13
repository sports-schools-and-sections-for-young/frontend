import { FC } from "react";
import styles from "./SliderSportsSection.module.scss";
import HeadingIcon from "../ui/HeadingIcon/HeadingIcon";
import { view, headingLevel } from "../ui/HeadingIcon/types";
import Slider from "../Slider/Slider";
import ImageCard from "../ui/ImageCard/ImageCard";
import { ImageCardSize } from "../ui/ImageCard/types";
import sliderHeader from "../../assets/images/slider-header-background.svg";

const SliderSportsSection: FC = () => {
  return (
    <section className={styles.sliderSection}>
      <HeadingIcon
        className={styles.headingIconContainer}
        headingLevel={headingLevel.H2}
        title="Виды спорта"
        view={view.BLUE}
      />
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>
            Подбери спортивную секцию прямо сейчас!
          </h3>
          <ImageCard
            className={styles.image}
            src={sliderHeader}
            alt="фон"
            size={ImageCardSize.SLIDER_HEADER_IMG}
          />
        </div>

        <Slider />
      </div>
    </section>
  );
};

export default SliderSportsSection;
