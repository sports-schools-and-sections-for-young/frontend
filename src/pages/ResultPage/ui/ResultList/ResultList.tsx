import { FC, useContext, useState } from "react";
import styles from "./ResultList.module.scss";
import AppContext from "../../../../context/AppContext";
import ResultCard from "../../../../components/ResultCard/ResultCard";
import { ResultListProps } from "../../types";
import MapView from "../MapView/MapView";
import { Section } from "../../../../types";
import { useFavourite } from "../../../../hooks/useLocalFavourites";
import Pagination from "../../../../components/ui/Pagination/Pagination";
import ResultNotFound from "../../../../components/ResultNotFound/ResultNotFound";

const ResultList: FC<ResultListProps> = (props) => {
  const { sectionRequest, filteredSections } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const { mapView, isMobile } = props;

  const [quantity, setQuantity] = useState<number>(0);
  const [favourite, setFavourite] = useFavourite();

  return (
    <section className={styles.listContainer}>
      {filteredSections.length < 1 ? (
        <ResultNotFound />
      ) : (
        <>
          <p className={styles.description}>
            Найдено {filteredSections.length}
          </p>
          <ul className={styles.cardList}>
            {mapView === 2 ? (
              <>
                <li>
                  <MapView setActiveSection={setActiveSection} />
                </li>
                <li>
                  <ResultCard
                    key={activeSection && activeSection.id}
                    section={activeSection}
                    favourite={favourite}
                    setFavourite={setFavourite}
                    isMobile={isMobile}
                  />
                </li>
              </>
            ) : (
              sectionRequest &&
              filteredSections.slice(0, quantity).map((section) => {
                return (
                  <li key={section.id}>
                    <ResultCard
                      section={section}
                      favourite={favourite}
                      setFavourite={setFavourite}
                      isMobile={isMobile}
                    />
                  </li>
                );
              })
            )}
          </ul>

          {quantity < filteredSections.length && mapView !== 2 && (
            <Pagination
              setValue={setQuantity}
              value={quantity}
              list={filteredSections}
            />
          )}
        </>
      )}
    </section>
  );
};

export default ResultList;
