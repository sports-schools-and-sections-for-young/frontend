import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./AboutSection.module.scss";
import ImageCard from "../ui/ImageCard/ImageCard";
import { ImageCardSize } from "../ui/ImageCard/types";
import mainImg from "../../assets/images/main-image.png";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import Icon from "../ui/Icon/Icon";
import { IconTypes } from "../ui/Icon/types";

const AboutSection: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.about}>
      <div className={styles.sectionContainer}>
        <div className={styles.leftPart}>
          <h1 className={styles.title}>
            Платформа для поиска спортивных секций для ваших детей
          </h1>
          <p className={styles.description}>
            СпортХаб — простой и удобный инструмент, который поможет вам выбрать
            подходящую спортивную школу или секцию для вашего ребенка.
          </p>
          <div className={styles.actionContainer}>
            <Button
              className={styles.button}
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.OTHER}
              onClick={() => navigate("/search")}
            >
              <>
                Найти занятия
                <Icon type={IconTypes.RIGHT_ICON} />
              </>
            </Button>
            <Link className={styles.registrationLink} to="/registration">
              Зарегистрировать секцию
            </Link>
          </div>
        </div>
        <ImageCard
          size={ImageCardSize.MAIN_IMG}
          src={mainImg}
          alt="Дети в спортивном зале"
        />
      </div>
    </section>
  );
};

export default AboutSection;
