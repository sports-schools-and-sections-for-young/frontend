import { FC } from "react";
import styles from "./Schedule.module.scss";
import { abbreviateWeekDayName } from "../../../utils/functions";
import { weekdays } from "../../../utils/constants/week";

interface IScheduleProps {
  schedule: number[];
  isMobile: boolean;
}

const Schedule: FC<IScheduleProps> = (props) => {
  const { schedule, isMobile } = props;
  return (
    <div className={styles.weekdays}>
      {schedule.map((d: number, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i}>
          {abbreviateWeekDayName(weekdays[d - 1], isMobile)}
          {schedule.length - 1 === i ? "" : ","}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default Schedule;
