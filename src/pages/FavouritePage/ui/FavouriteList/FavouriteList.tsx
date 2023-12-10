import { FC, useState } from "react";
import styles from "./FavouriteList.module.scss";
import ResultCard from "../../../../components/ResultCard/ResultCard";
import { useFavourite } from "../../../../hooks/useLocalFavourites";
import Badge from "../../../../components/ui/Badge/Badge";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import Pagination from "../../../../components/ui/Pagination/Pagination";

const FavouriteList: FC = () => {
  const [favourite, setFavourite] = useFavourite();
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <section className={styles.listContainer}>
      <div className={styles.options}>
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
      </div>
      <ul className={styles.cardList}>
        {favourite &&
          favourite.slice(0, quantity).map((section) => {
            return (
              <li key={section.id}>
                <ResultCard
                  section={section}
                  favourite={favourite}
                  setFavourite={setFavourite}
                />
              </li>
            );
          })}
        {quantity < favourite.length && (
          <Pagination
            setValue={setQuantity}
            value={quantity}
            list={favourite}
          />
        )}
      </ul>
    </section>
  );
};

export default FavouriteList;
