import { FC, useState } from "react";
import { SportSectionProps } from "../../types";
import styles from "./AddDaysSection.module.scss";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { BadgeColor } from "../../../../components/ui/Badge/types";

interface DayOfWeek {
  id: number;
  title: string;
}

const daysOfWeek: DayOfWeek[] = [
  { id: 1, title: "Понедельник" },
  { id: 2, title: "Вторник" },
  { id: 3, title: "Среда" },
  { id: 4, title: "Четверг" },
  { id: 5, title: "Пятница" },
  { id: 6, title: "Суббота" },
  { id: 7, title: "Воскресенье" },
];

const AddDaysSection: FC<SportSectionProps> = () => {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  const toggleDay = (dayId: number) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((id) => id !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  return (
    <section className={styles.step}>
      <h2 className={styles.title}>
        3.&nbsp;Выберите <span className={styles.span}>день недели</span>
      </h2>
      <p className={styles.subtitle}>Выберите один или несколько</p>
      <ul className={styles.selected}>
        {daysOfWeek.map((day) => (
          <Badge
            key={day.id}
            color={
              selectedDays.includes(day.id)
                ? BadgeColor.PRIMARY
                : BadgeColor.PRIMARY
            }
            isActive={selectedDays.includes(day.id)}
            onClick={() => toggleDay(day.id)}
          >
            {day.title}
          </Badge>
        ))}
      </ul>
    </section>
  );
};

export default AddDaysSection;
