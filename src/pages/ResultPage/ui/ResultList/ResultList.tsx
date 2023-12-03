import { FC, useContext, useState } from "react";
import styles from "./ResultList.module.scss";
import AppContext from "../../../../context/AppContext";
import ResultCard from "../ResultCard/ResultCard";
import Button from "../../../../components/ui/Button/Button";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import { ResultListProps } from "../../types";
import MapView from "../MapView/MapView";
import { Section } from "../../../../types";
import { useFavourite } from "../../../../hooks/useLocalFavourites";

const ResultList: FC<ResultListProps> = (props) => {
  const { sectionRequest, filteredSections } = useContext(AppContext);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const { mapView } = props;
  const moreStep = 6;
  const initialQuantity =
    filteredSections.length >= moreStep ? moreStep : filteredSections.length;

  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const showMore = () => {
    if (filteredSections.length <= quantity + moreStep) {
      setQuantity((pr) => pr + moreStep);
    } else {
      setQuantity(filteredSections.length);
    }
  };

  const [favourite, setFavourite] = useFavourite();

  return (
    <ul className={styles.cardList}>
      <li>
        <p className={styles.description}>Найдено {filteredSections.length}</p>
      </li>
      {mapView === 2 ? (
        <>
          <MapView setActiveSection={setActiveSection} />
          <ResultCard
            section={activeSection}
            favourite={favourite}
            setFavourite={setFavourite}
          />
        </>
      ) : (
        sectionRequest &&
        filteredSections.slice(0, quantity).map((section) => {
          return (
            <ResultCard
              key={section.id}
              section={section}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          );
        })
      )}
      <li className={styles.more}>
        {quantity < filteredSections.length && mapView !== 2 && (
          <>
            <Button
              testId={ButtonTestId.FORWARD}
              color={ButtonColor.PRIMARY}
              withMinWidth
              type="button"
              onClick={showMore}
            >
              Загрузить еще
            </Button>
            <span className={styles.moreCount}>
              {quantity} из {filteredSections.length}
            </span>
          </>
        )}
      </li>
    </ul>
  );
};

export default ResultList;
