import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./ResultCard.module.scss";
import Button from "../../../../components/ui/Button/Button";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon";
import { IconTypes } from "../../../../components/ui/Icon/types";
import { ResultCardProps } from "../../types";
import { getDeclension } from "../../../../utils/functions";
import { Section } from "../../../../types";

const ResultCard: FC<ResultCardProps> = ({
  section,
  favourite,
  setFavourite,
}) => {
  if (!section) return null;
  const {
    id,
    sport_type,
    title,
    address,
    price,
    rating,
    review_amount,
    schedule,
  } = section;

  const isLiked = favourite.some((f) => f.id === id);

  const toggleLike = (section: Section) => {
    if (isLiked) {
      setFavourite((prev) => prev.filter((s) => s.id !== section.id));
    } else {
      setFavourite((prev) => [...prev, section]);
    }
  };

  const sheduleDays = (): React.ReactNode => {
    return schedule.length > 0
      ? schedule
          .split(",")
          .map((item) => {
            if (item === "Понедельник") return "Пн";
            if (item === "Вторник") return "Вт";
            if (item === "Среда") return "Ср";
            if (item === "Четверг") return "Чт";
            if (item === "Пятница") return "Пт";
            if (item === "Суббота") return "Сб";
            if (item === "Воскресенье") return "Вс";
            return item;
          })
          .join(", ")
      : "Пн,Вт,Ср,Чт,Пт,Сб,Вс";
  };
  return (
    <article className={styles.section} key={id}>
      <div className={styles.leftPart}>
        <p className={styles.sportType}>{sport_type}</p>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.feedback}>
          <p className={styles.raiting}>{rating}</p>
          <Link to="/" className={styles.reviews}>
            {`${review_amount} ${getDeclension(review_amount, [
              "отзыв",
              "отзыва",
              "отзывов",
            ])}`}
          </Link>
        </div>
        <div className={styles.place}>
          <p className={styles.distance}>14 км</p>
          <p className={styles.location}>
            Ул. {address.street}, {address.house}
          </p>
        </div>
        <div className={styles.timesheet}>Расписание - {sheduleDays()}</div>
      </div>
      <div className={styles.rightPart}>
        <button
          type="button"
          aria-label="Поставить или снять лайк"
          onClick={() => toggleLike(section)}
          className={`${styles.likeButton} ${
            isLiked ? styles.likedButton : ""
          }`}
        />
        <p className={styles.price}>{price} ₽ за занятие</p>
        <Button
          className={styles.transitionButton}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.OTHER}
        >
          <>
            Перейти на сайт
            <Icon type={IconTypes.RIGHT_ICON} />
          </>
        </Button>
      </div>
    </article>
  );
};

export default ResultCard;
