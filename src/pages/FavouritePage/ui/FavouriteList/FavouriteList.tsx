import { FC, useState } from "react";
import styles from "./FavouriteList.module.scss";
import ResultCard from "../../../ResultPage/ui/ResultCard/ResultCard";
import Button from "../../../../components/ui/Button/Button";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import { useFavourite } from "../../../../hooks/useLocalFavourites";
import Badge from "../../../../components/ui/Badge/Badge";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";

const FavouriteList: FC = () => {
  const [favourite, setFavourite] = useFavourite();
  const moreStep = 6;
  const initialQuantity =
    favourite.length >= moreStep ? moreStep : favourite.length;

  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const showMore = () => {
    if (favourite.length <= quantity + moreStep) {
      setQuantity((pr) => pr + moreStep);
    } else {
      setQuantity(favourite.length);
    }
  };

  return (
    <ul className={styles.cardList}>
      <li>
        <p className={styles.description}>Сохранено {favourite.length}</p>
        {favourite.length > 0 && (
          <Badge
            isActive
            color={BadgeColor.SECONDARY}
            onClick={() => setFavourite([])}
          >
            Очистить избранное
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          </Badge>
        )}
      </li>
      {favourite &&
        favourite.slice(0, quantity).map((section) => {
          return (
            <ResultCard
              key={section.id}
              section={section}
              favourite={favourite}
              setFavourite={setFavourite}
            />
          );
        })}
      <li className={styles.more}>
        {quantity < favourite.length && (
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
              {quantity} из {favourite.length}
            </span>
          </>
        )}
      </li>
    </ul>
  );
};

export default FavouriteList;
