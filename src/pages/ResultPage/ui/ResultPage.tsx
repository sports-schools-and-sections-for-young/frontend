import React, { FC, useState, useContext } from "react";
import styles from "./ResultPage.module.scss";
import AppContext, {
  sectionsRequestDefault,
} from "../../../context/AppContext";
import Header from "../../../components/ui/Header/Header";
import ResultFilters from "./ResultFilters/ResultFilters";
import ResultNavigate from "./ResultNavigate/ResultNavigate";
import ResultList from "./ResultList/ResultList";
import ResultOptions from "./ResultOptions/ResultOptions";

const ResultPage: FC = () => {
  const { setSectionRequest, filteredSections } = useContext(AppContext);

  const [mapView, setMapView] = useState<number>(1);

  const clearFilterList = () => {
    setSectionRequest(sectionsRequestDefault);
  };

  const searchHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Поиск>>");
  };

  return (
    <>
      <Header />
      <ResultNavigate setMapView={setMapView} />
      <main className={styles.result}>
        <h2 className={styles.title}>
          Результаты поиска
          {mapView === 2 && (
            <span className={styles.description}>
              {filteredSections.length} секций
            </span>
          )}
        </h2>
        <ResultOptions clearFilters={clearFilterList} />
        <div className={styles.resultContainer}>
          <ResultFilters
            searchHandle={searchHandle}
            clearFilters={clearFilterList}
          />
          <ResultList mapView={mapView} />
        </div>
      </main>
      <footer className={styles.footer}>{}</footer>
    </>
  );
};

export default ResultPage;
