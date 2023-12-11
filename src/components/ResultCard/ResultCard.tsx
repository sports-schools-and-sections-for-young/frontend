import React, { Dispatch, FC, SetStateAction } from "react";
import classnames from "classnames";
import styles from "./ResultCard.module.scss";
import Heart from "../../assets/images/icons/heart.svg?react";
import Icon from "../ui/Icon/Icon.tsx";
import { IconTypes } from "../ui/Icon/types";
import { Section } from "../../types";

interface ResultCardProps {
  section: Section | null;
  favourite: Section[];
  setFavourite: Dispatch<SetStateAction<Section[]>>;
}

const ResultCard: FC<ResultCardProps> = ({
  section,
  favourite,
  setFavourite,
}) => {
  if (!section) return null;
  const { id, sport_type, title, address, price, phone, schedule, site } =
    section;

  const buttonClass = classnames({
    [styles.transitionButton]: true,
    [styles.disabledBtn]: site.length < 1,
  });

  const isLiked = favourite.some((f) => f.id === id);

  const heartBtnClass = classnames({
    [styles.heartBtn]: true,
    [styles.heartBtnActive]: isLiked,
  });

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
          <p className={styles.phone}>{phone}</p>
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
          className={styles.likeButton}
        >
          <Heart className={heartBtnClass} />
        </button>
        <p className={styles.price}>{price} ₽ за занятие</p>
        <a href={site} target="_blank" rel="noreferrer" className={buttonClass}>
          Перейти на сайт
          <Icon type={IconTypes.RIGHT_ICON} />
        </a>
      </div>
    </article>
  );
};

export default ResultCard;
