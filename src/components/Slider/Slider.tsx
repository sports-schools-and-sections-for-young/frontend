// import { useSwipeable } from 'react-swipeable';
import React, { useState } from "react";
import styles from "./Slider.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon.tsx";
import { IconTypes } from "../ui/Icon/types";
import { sportsData } from "../../utils/constants/sportsData.ts";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sportsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sportsData.length - 1 ? 0 : prev + 1));
  };

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className={styles.slider}>
      <div className={styles.containerSlider}>
        <div className={styles.containerSwipe}>
          <button
            className={`${styles.buttonLeft} ${
              currentSlide === 0 ? styles.hidden : ""
            }`}
            type="button"
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
          />
          <div className={styles.containerText}>
            <p className={styles.kindOfSport}>
              {sportsData[currentSlide].name}
            </p>
            <p className={styles.textSlider}>{sportsData[currentSlide].text}</p>
            <div className={styles.containerButton}>
              <Button color={ButtonColor.PRIMARY} testId={ButtonTestId.FORWARD}>
                Записаться
                <Icon type={IconTypes.RIGHT_ICON} />
              </Button>
              <span className={styles.numberSlider}>
                <span className={styles.leadingNumbers}>
                  {formatNumber(currentSlide + 1)}
                </span>
                /{formatNumber(sportsData.length)}
              </span>
            </div>
          </div>
          <img
            className={styles.imgSlider}
            src={sportsData[currentSlide].imageSrc}
            alt={sportsData[currentSlide].name}
          />
          <button
            className={`${styles.buttonRight} ${
              currentSlide === sportsData.length - 1 ? styles.hidden : ""
            }`}
            type="button"
            onClick={nextSlide}
            aria-label="Следующий слайд"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
