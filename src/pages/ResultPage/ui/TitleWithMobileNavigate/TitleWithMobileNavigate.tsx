import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TitleWithMobileNavigate.module.scss";
import Arrow from "../../../../assets/images/icons/arrow-left-grey.svg?react";
import FilterBtn from "../../../../assets/images/icons/filters-btn.svg?react";
import { ITitleWithMobileNavigateProp } from "../../types";

const TitleWithMobileNavigate: FC<ITitleWithMobileNavigateProp> = (props) => {
  const {
    isFilter = false,
    toggleFilterPanel = () => {},
    clearFilters = () => {},
    children,
  } = props;
  const navigate = useNavigate();

  return (
    <nav className={styles.navigate}>
      <ul className={styles.nav_list}>
        <li>
          <button
            type="button"
            className={styles.button}
            onClick={() =>
              isFilter
                ? toggleFilterPanel(false)
                : navigate("/search", { state: { step: 4 } })
            }
          >
            <Arrow />
          </button>
        </li>
        <li>{children}</li>
        <li>
          {!isFilter ? (
            <button
              className={styles.button}
              type="button"
              onClick={() => toggleFilterPanel(true)}
            >
              <FilterBtn />
            </button>
          ) : (
            <button
              className={styles.button}
              type="button"
              onClick={clearFilters}
            >
              Очистить
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default TitleWithMobileNavigate;
