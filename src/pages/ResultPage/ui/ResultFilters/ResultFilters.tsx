import { FC, useContext } from "react";
import classnames from "classnames";
import { Sport } from "../../../../types";
import styles from "./ResultFilters.module.scss";
import Button from "../../../../components/ui/Button/Button";
import Badge from "../../../../components/ui/Badge/Badge";
import Input from "../../../../components/ui/Input/Input";
import SearchInput from "../../../../components/ui/SearchInput/SearchInput";
import Icon from "../../../../components/ui/Icon/Icon";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox";
import CheckboxPanel from "../../../../components/ui/CheckboxPanel/CheckboxPanel";
import AppContext from "../../../../context/AppContext";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import { IResultFiltersProps } from "../../types";
import { distanceButtons } from "../../../../utils/constants/distanceButtons.ts";
import { useSectionsFetch } from "../../../../hooks/useSectionsFetch.tsx";
import { usePriceHandler } from "../../../../hooks/usePriceHandler.tsx";
import TitleWithMobileNavigate from "../TitleWithMobileNavigate/TitleWithMobileNavigate.tsx";

const ResultFilters: FC<IResultFiltersProps> = (props) => {
  const { clearFilters, setLoader, isOpen, toggleFilterPanel } = props;
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);

  const filtersClass = classnames({
    [styles.filters]: true,
    [styles.filtersOpen]: isOpen,
  });

  const fetchSections = useSectionsFetch(setLoader);

  const { maxPrice, setMaxPrice, setFreeTrial } = usePriceHandler();

  const addSport = (sport: Sport) => {
    setSectionRequest((request) => {
      if (request.sports) {
        return { ...request, sports: [...request.sports, sport] };
      }
      return { ...request, sports: [sport] };
    });
  };

  return (
    <form className={styles.filters_container}>
      <ul className={filtersClass}>
        <li className={styles.filter_item}>
          <TitleWithMobileNavigate
            isFilter
            clearFilters={clearFilters}
            toggleFilterPanel={toggleFilterPanel}
          >
            <h3 className={styles.subtitle}>Фильтры</h3>
          </TitleWithMobileNavigate>
        </li>
        <li className={styles.filter_item}>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Виды спорта
          </p>
          <SearchInput
            searchingList={sports.filter((sport) =>
              sectionRequest.sports
                ? !sectionRequest.sports.includes(sport)
                : sport,
            )}
            iconType={InputIcon.DOWN_ARROW}
            iconPosition={InputIconPosition.RIGHT}
            placeholder="Добавить вид спорта"
            type="text"
            itemClickHandler={addSport}
          />
        </li>
        <li className={styles.filter_item}>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Удаленность
          </p>
          <CheckboxPanel
            activeOption={sectionRequest.distance || 0}
            btns={distanceButtons}
            setOption={(option) =>
              setSectionRequest((requestData) => ({
                ...requestData,
                distance: option,
              }))
            }
          />
        </li>
        <li className={styles.filter_item}>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Цена
          </p>
          <Input
            labelName="Максимум"
            type="number"
            className={styles.priceInput}
            iconType={InputIcon.RUB}
            iconPosition={InputIconPosition.LEFT}
            value={maxPrice > 0 ? maxPrice : ""}
            onChange={(evt) => setMaxPrice(+evt.target.value)}
          />
          <Checkbox
            title="Бесплатное пробное"
            checked={sectionRequest.freeTrial}
            onChange={setFreeTrial}
          />
        </li>
        <li className={styles.buttonContainer}>
          <Button
            testId={ButtonTestId.FORWARD}
            color={ButtonColor.PRIMARY}
            withMinWidth
            type="button"
            onClick={fetchSections}
          >
            Применить
            <Icon type={IconTypes.RIGHT_ICON} />
          </Button>
          <Badge
            className={styles.clearFiltersBtn}
            isActive
            color={BadgeColor.SECONDARY}
            onClick={clearFilters}
          >
            Сбросить все фильтры
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          </Badge>
        </li>
      </ul>
    </form>
  );
};

export default ResultFilters;
