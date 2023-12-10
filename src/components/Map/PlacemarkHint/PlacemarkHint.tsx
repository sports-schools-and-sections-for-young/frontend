import { FC } from "react";
import styles from "./PlacemarkHint.module.scss";
import { Section } from "../../../types";

interface PlacemarkHintProps {
  visible: boolean;
  section: Section;
}

export const PlacemarkHint: FC<PlacemarkHintProps> = ({ visible, section }) => {
  const { sport_type, sport_organization, site } = section;

  return (
    <div>
      {visible && (
        <div className={styles.hint}>
          <p className={styles.sportType}>{sport_type}</p>
          <h3 className={styles.title}>{sport_organization}</h3>
          {site && (
            <a href={site} className={styles.link}>
              Сайт
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PlacemarkHint;
