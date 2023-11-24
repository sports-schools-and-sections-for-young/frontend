import { FC, useContext } from "react";
import styles from "./ResultList.module.scss";
import AppContext from "../../../../context/AppContext";
import ResultCard from "../ResultCard/ResultCard";
import { ResultListProps } from "../../types";

const ResultList: FC<ResultListProps> = (props) => {
  const { sectionRequest, filteredSections } = useContext(AppContext);
  const { mapView } = props;
  return (
    <ul className={styles.cardList}>
      <li>
        <p className={`${styles.heading} ${styles.heading_count}`}>
          Найдено {filteredSections.length}
        </p>
      </li>
      {mapView === 2
        ? "Карта"
        : sectionRequest &&
          filteredSections.map((section) => {
            return <ResultCard key={section.id} section={section} />;
          })}
    </ul>
  );
};

export default ResultList;
