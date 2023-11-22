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
import { SectionProps } from "./types";

const ResultCard: FC<SectionProps> = (props) => {
  const {
    id,
    sport_type,
    title,
    address,
    price,
    raiting,
    review_amount,
    shedule,
  } = props;

  const reviewAmount = (): React.ReactNode => {
    let result;
    if (review_amount === 1) {
      result = `${review_amount} отзыв`;
    }
    if (review_amount === 2 || review_amount === 3 || review_amount === 4)
      result = `${review_amount} отзывa`;
    if (review_amount >= 5 || review_amount === 0)
      result = `${review_amount} отзывов`;
    return result;
  };

  const sheduleDays = (): React.ReactNode => {
    return shedule.days
      .split(", ")
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
      .join(", ");
  };
  return (
    <article className={styles.section} key={id}>
      <div className={styles.leftPart}>
        <p className={styles.sportType}>{sport_type}</p>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.feedback}>
          <p className={styles.raiting}>{raiting}</p>
          <Link to="/" className={styles.reviews}>
            {reviewAmount()}
          </Link>
        </div>
        <div className={styles.place}>
          <p className={styles.distance}>14 км</p>
          <p className={styles.location}>
            Ул. {address.street}, {address.house}
          </p>
        </div>
        <div className={styles.timesheet}>
          Расписание - {sheduleDays()} {shedule.time}
        </div>
      </div>
      <div className={styles.rightPart}>
        <button
          type="button"
          aria-label="Поставить или снять лайк"
          className={styles.likeButton}
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
