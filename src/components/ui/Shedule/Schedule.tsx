import { FC } from "react";
import styles from "./Schedule.module.scss";
import { abbreviateWeekDayName } from "../../../utils/functions";

interface IScheduleProps {
  schedule: string;
  isMobile: boolean;
}

const Schedule: FC<IScheduleProps> = (props) => {
  const { schedule, isMobile } = props;
  const daysArray = schedule.split(",");

  return (
    <div className={styles.weekdays}>
      {daysArray.map((d: string, i: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i}>
          {abbreviateWeekDayName(d.trim(), isMobile)}
          {daysArray.length - 1 === i ? "" : ","}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default Schedule;
