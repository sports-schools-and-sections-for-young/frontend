import React, { FC, useContext } from "react";
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
import { CheckboxBtnSize } from "../../../../components/ui/CheckboxBtn/types";
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

const ResultFilters: FC<IResultFiltersProps> = (props) => {
  const { searchHandle, clearFilters } = props;
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);

  const changePriceHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSectionRequest((request) => ({
      ...request,
      maxPrice: +evt.target.value,
    }));
  };

  const addSport = (sport: Sport) => {
    setSectionRequest((request) => {
      if (request.sports) {
        return { ...request, sports: [...request.sports, sport] };
      }
      return { ...request, sports: [sport] };
    });
  };

  return (
    <form className={styles.filters_container} onSubmit={searchHandle}>
      <ul className={styles.filters}>
        <li className={styles.filter_item}>
          <h3 className={styles.subtitle}>Фильтры</h3>
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
            btns={[
              {
                id: 0,
                title: "не важно",
                size: CheckboxBtnSize.SECONDARY,
              },
              {
                id: 1,
                title: "1 км от дома",
                size: CheckboxBtnSize.SECONDARY,
              },
              {
                id: 3,
                title: "3 км от дома",
                size: CheckboxBtnSize.SECONDARY,
              },
            ]}
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
            className={styles.priceInput}
            iconType={InputIcon.RUB}
            iconPosition={InputIconPosition.LEFT}
            value={sectionRequest.maxPrice || ""}
            onChange={changePriceHandler}
          />
          <Checkbox
            title="Бесплатное пробное"
            checked={sectionRequest.freeTrieal}
            onChange={() =>
              setSectionRequest((requestData) => ({
                ...requestData,
                freeTrieal: !requestData.freeTrieal,
              }))
            }
          />
        </li>
        <li className={styles.buttonContainer}>
          <Button
            testId={ButtonTestId.FORWARD}
            color={ButtonColor.PRIMARY}
            withMinWidth
            type="submit"
          >
            Применить
            <Icon type={IconTypes.RIGHT_ICON} />
          </Button>
          <Badge isActive color={BadgeColor.SECONDARY} onClick={clearFilters}>
            Сбросить все фильтры
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          </Badge>
        </li>
      </ul>
    </form>
  );
};

export default ResultFilters;
