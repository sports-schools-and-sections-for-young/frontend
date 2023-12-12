import React, { Dispatch, FC, SetStateAction } from "react";
import classnames from "classnames";
import styles from "./ResultCard.module.scss";
import Heart from "../../assets/images/icons/heart.svg?react";
import Icon from "../ui/Icon/Icon.tsx";
import { IconTypes } from "../ui/Icon/types";
import { Section } from "../../types";
import { abbreviateWeekDayName } from "../../utils/functions/index.ts";
import { weekdays } from "../../utils/constants/week.ts";

interface ResultCardProps {
  section: Section | null;
  favourite: Section[];
  setFavourite: Dispatch<SetStateAction<Section[]>>;
  isMobile: boolean;
}

const ResultCard: FC<ResultCardProps> = ({
  section,
  favourite,
  setFavourite,
  isMobile,
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
    if (schedule.length < 1) {
      return weekdays
        .map((item) => abbreviateWeekDayName(item, isMobile))
        .join(", ");
    }
    return schedule
      .split(",")
      .map((item) => abbreviateWeekDayName(item, isMobile))
      .filter((item) => item.length > 0)
      .join(", ");
  };
  const schoolSchedule = sheduleDays();

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
        {schoolSchedule && (
          <div className={styles.timesheet}>{schoolSchedule}</div>
        )}
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
