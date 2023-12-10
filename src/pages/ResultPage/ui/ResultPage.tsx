import { FC, useState, useContext, useEffect } from "react";

import styles from "./ResultPage.module.scss";
import AppContext, {
  sectionsRequestDefault,
} from "../../../context/AppContext";
import Header from "../../../components/ui/Header/Header";
import ResultFilters from "./ResultFilters/ResultFilters";
import ResultNavigate from "./ResultNavigate/ResultNavigate";
import ResultList from "./ResultList/ResultList";
import ResultOptions from "./ResultOptions/ResultOptions";
import Preloader from "../../../components/ui/Preloader/Preloader";
import { PreloaderSize } from "../../../components/ui/Preloader/types";
import { usePriceHandler } from "../../../hooks/usePriceHandler.tsx";
import TitleWithMobileNavigate from "./TitleWithMobileNavigate/TitleWithMobileNavigate.tsx";

const ResultPage: FC = () => {
  const { setSectionRequest, filteredSections } = useContext(AppContext);

  const [mapView, setMapView] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const { handlePriceOptions } = usePriceHandler();

  useEffect(() => {
    handlePriceOptions();
  }, []);

  const clearFilterList = () => {
    setSectionRequest(sectionsRequestDefault);
  };

  return (
    <>
      <Header />
      <main className={styles.result}>
        <ResultNavigate setMapView={setMapView} activeView={mapView} />
        <TitleWithMobileNavigate toggleFilterPanel={setShowFilters}>
          <h2 className={styles.title}>
            Результаты поиска
            {mapView === 2 && (
              <span className={styles.description}>
                {filteredSections.length} секций
              </span>
            )}
          </h2>
        </TitleWithMobileNavigate>
        <ResultOptions clearFilters={clearFilterList} />
        <div className={styles.resultContainer}>
          <ResultFilters
            setLoader={setLoader}
            clearFilters={clearFilterList}
            isOpen={showFilters}
            toggleFilterPanel={setShowFilters}
          />
          {loader && <Preloader size={PreloaderSize.Large} />}
          {!loader && <ResultList mapView={mapView} />}
        </div>
      </main>
      <footer className={styles.footer}>{}</footer>
    </>
  );
};

export default ResultPage;
