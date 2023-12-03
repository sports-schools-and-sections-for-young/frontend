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
import ResultNotFound from "./ResultNotFound/ResultNotFound";
import Preloader from "../../../components/ui/Preloader/Preloader";
import { searchSections } from "../../../utils/api";
import { Section } from "../../../types";

const ResultPage: FC = () => {
  const {
    setSectionRequest,
    filteredSections,
    setFetchedSections,
    setFilteredSections,
    sectionRequest,
  } = useContext(AppContext);

  const [mapView, setMapView] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);

  const clearFilterList = () => {
    setSectionRequest(sectionsRequestDefault);
  };

  const searchHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchSections = async () => {
      setLoader(true);
      const sections: Section[] = await searchSections(sectionRequest);
      setFetchedSections(sections);

      if (!filteredSections.length) {
        setFilteredSections(sections);
      }

      setLoader(false);
    };
    fetchSections();
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
          {loader && <Preloader />}
          {!loader && filteredSections.length < 1 && <ResultNotFound />}
          {!loader && filteredSections.length >= 1 && (
            <ResultList mapView={mapView} />
          )}
        </div>
      </main>
      <footer className={styles.footer}>{}</footer>
    </>
  );
};

export default ResultPage;
