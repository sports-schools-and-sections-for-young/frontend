import React, { useState } from "react";
import styles from "./Slider.module.scss";
import footballImage from "../../assets/images/icons/path_to_football_image.jpg";
import Button from "../ui/Button/Button";
import {
  ButtonColor,
  ButtonHeight,
  ButtonFeature,
  IconSide,
} from "../ui/Button/types";

interface SportItem {
  name: string;
  text: string;
  imageSrc: string;
  id: number;
}

const sportsData: SportItem[] = [
  {
    id: 0,
    name: "Футбол",
    text: "Откройте для своего ребенка удивительный мир футбола! Присоединяйтесь к спортивной секции по футболу, где ваш ребенок разовьет навыки, физическую форму и командное взаимодействие. Футбол - красивый и энергичный спорт, способствующий здоровью, самооценке, дисциплине и социализации.",
    imageSrc: footballImage,
  },
  {
    id: 1,
    name: "Плавание",
    text: "Погрузите вашего ребенка в увлекательный мир плавания! Присоединяйтесь к нашей спортивной секции по плаванию, где ваш ребенок сможет развить свои плавательные навыки, улучшить физическую форму и научиться чувствовать себя комфортно в воде.",
    imageSrc: footballImage,
  },
  {
    id: 2,
    name: "Теннис",
    text: "Позвольте вашему ребенку попробовать увлекательный мир тенниса! Он поможет развить свои навыки, повысить физическую форму и научиться играть в команде. Теннис - это не только красивый и динамичный спорт, но и уникальная возможность развить выносливость, координацию и стратегическое мышление.",
    imageSrc: footballImage,
  },
  {
    id: 3,
    name: "Гимнастика",
    text: "Предоставьте вашему ребенку возможность проникнуть в удивительный мир гимнастики! С помощью гимнастики ваш ребенок сможет развить гибкость, силу, координацию и баланс. Гимнастика - это не только элегантный и творческий спорт, но и возможность развитию грацию и самодисциплину.",
    imageSrc: footballImage,
  },
  {
    id: 4,
    name: "Баскетбол",
    text: "Откройте для вашего ребенка захватывающий мир баскетбола! Ваш ребенок сможет развить координацию, физическую форму и стратегическое мышление. Баскетбол - это не только энергичный и командный вид спорта, но и возможность развить соревновательность, силу и скорость.",
    imageSrc: footballImage,
  },
];

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
            aria-label="Previous slide"
          />
          <div className={styles.containerText}>
            <p className={styles.kindOfSport}>
              {sportsData[currentSlide].name}
            </p>
            <p className={styles.textSlider}>{sportsData[currentSlide].text}</p>
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
            aria-label="Next slide"
          />
        </div>
        <div className={styles.containerButton}>
          <Button
            color={ButtonColor.PRIMARY}
            feature={ButtonFeature.FORWARD}
            height={ButtonHeight.HIGH}
            icon="/src/assets/images/icons/icon-arrow right.svg"
            iconAlt="Стрелка вправо"
            iconSide={IconSide.RIGHT}
            title="Записаться"
            type="button"
            withMinWidth
          />
          <span className={styles.numberSlider}>
            <span className={styles.leadingNumbers}>
              {formatNumber(currentSlide + 1)}
            </span>
            /{formatNumber(sportsData.length)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
