import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import styles from "./Slider.module.scss";
import { sportsData } from "../../utils/constants/sportsData";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon";
import { IconTypes } from "../ui/Icon/types";
import useSwiperStyles from "./useSwiperStyles/useSwiperStyles";

const Slider: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 601);
  useSwiperStyles();
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 601);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      className={styles.mySwiper}
      modules={[Navigation]}
      navigation
    >
      {sportsData.map((item) => (
        <SwiperSlide className={styles.swiperSlide} key={item.id}>
          <div className={styles.slider}>
            <div className={styles.containerSlider}>
              <div className={styles.containerSwipe}>
                <div className={styles.containerText}>
                  <p className={styles.kindOfSport}>{item.name}</p>
                  <p className={styles.textSlider}>
                    {isSmallScreen ? item.textPart1 : item.text}
                  </p>
                  {isSmallScreen && (
                    <div className={styles.imgSlider}>
                      <img
                        className={styles.img}
                        src={item.imageSrc}
                        alt={item.name}
                      />
                    </div>
                  )}
                  {isSmallScreen && (
                    <p className={styles.textSlider}>{item.textPart2}</p>
                  )}
                  <div className={styles.containerButton}>
                    <Button
                      color={ButtonColor.PRIMARY}
                      testId={ButtonTestId.FORWARD}
                      onClick={() =>
                        navigate("/search", {
                          state: { step: 1, sport: [item.name] },
                        })
                      }
                      className={styles.button}
                    >
                      Записаться
                      <Icon type={IconTypes.RIGHT_ICON} />
                    </Button>
                  </div>
                </div>
                {!isSmallScreen && (
                  <div className={styles.imgSlider}>
                    <img
                      className={styles.img}
                      src={item.imageSrc}
                      alt={item.name}
                    />
                  </div>
                )}
                <span className={styles.numberSlider}>
                  <span className={styles.leadingNumbers}>{item.id + 1}</span>/
                  {sportsData.length}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
