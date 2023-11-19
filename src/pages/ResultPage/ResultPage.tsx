import React, { FC, useState, useContext } from "react";
import styles from "./ResultPage.module.scss";
import CheckboxPanel from "../../components/ui/CheckboxPanel/CheckboxPanel";
import Button from "../../components/ui/Button/Button";
import Icon from "../../components/ui/Icon/Icon";
import Badge from "../../components/ui/Badge/Badge";
import { ButtonColor, ButtonTestId } from "../../components/ui/Button/types";
import { IconColor, IconTypes } from "../../components/ui/Icon/types";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import { CheckboxBtnSize } from "../../components/ui/CheckboxBtn/types";
import Input from "../../components/ui/Input/Input";
import SearchInput from "../../components/ui/SearchInput/SearchInput";
import { BadgeColor } from "../../components/ui/Badge/types";
import AppContext from "../../context";
import { Sport } from "../../types";
import {
  InputIcon,
  InputIconPosition,
} from "../../components/ui/InputField/types";

interface IResultPageProps {
  mapView?: boolean;
  isFree?: boolean;
}

interface IChieldInfo {
  age: number | null;
  gender: "male" | "female" | null;
}

// в пропсы фильтры. цена,пробное?. расстояние,
const ResultPage: FC<IResultPageProps> = (props) => {
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);
  const { gender, age, distance, maxPrice, location } = sectionRequest;
  const { isFree = false, mapView = false } = props;

  const [chieldInfo, setChieldInfo] = useState<IChieldInfo>({ gender, age });
  const [sportList, setSportList] = useState<Sport[] | null>([]);
  const [distanceFromHome, setDistanceFromHome] = useState<number | null>(
    distance,
  );
  const [foundList /* setFoundList */] = useState<object[]>([]);
  const [isFreeLesson, setIsFreeLesson] = useState<boolean>(isFree);
  const [price, setPrice] = useState<number | null>(maxPrice);

  const addFilter = (filterItem: Sport) => {
    setSportList((list) => {
      if (list) {
        return [...list, filterItem];
      }
      return [filterItem];
    });
  };

  const deleteFilter = (filterItem: Sport) => {
    setSportList((list) => {
      if (list) {
        return list.filter((filter) => filter.id !== filterItem.id);
      }
      return [];
    });
  };

  const changePriceHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+evt.target.value);
  };

  const clearFilterList = () => {
    /* setSectionRequest(sectionsRequestDefault) */
    setSportList(null);
    setChieldInfo({ age: null, gender: null });
    setPrice(null);
    setDistanceFromHome(null);
  };

  const searchHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSectionRequest({
      age: chieldInfo.age,
      gender: chieldInfo.gender,
      sports: sportList,
      distance: distanceFromHome,
      maxPrice,
      location,
    });
  };

  return (
    <section className={styles.result}>
      <h2 className={styles.title}>
        Результаты поиска
        {mapView && (
          <span className={styles.description}>{foundList.length} секций</span>
        )}
      </h2>
      <ul className={styles.options}>
        <li>
          {(chieldInfo.gender || chieldInfo.age) && (
            <Badge
              isActive
              color={BadgeColor.PRIMARY}
              onClick={() => setChieldInfo({ age: null, gender: null })}
            >
              {chieldInfo.gender === "male" && (
                <Icon type={IconTypes.BOY} color={IconColor.SECONDARY} />
              )}
              {chieldInfo.gender === "female" && (
                <Icon type={IconTypes.GIRL} color={IconColor.SECONDARY} />
              )}
              {chieldInfo.gender === "male" && "мальчик"}
              {chieldInfo.gender === "female" && "девочка"}{" "}
              {chieldInfo.age && chieldInfo.age > 0 ? chieldInfo.age : ""}
              <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
            </Badge>
          )}
        </li>
        {sportList &&
          sportList.map((filter) => {
            return (
              <li key={filter.id}>
                <Badge
                  isActive
                  color={BadgeColor.PRIMARY}
                  onClick={() => deleteFilter(filter)}
                >
                  {filter.title}
                  <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
                </Badge>
              </li>
            );
          })}
        <li>
          {sportList && sportList.length > 0 && (
            <Badge
              isActive
              color={BadgeColor.SECONDARY}
              onClick={clearFilterList}
            >
              Сбросить все фильтры
              <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
            </Badge>
          )}
        </li>
      </ul>
      <form className={styles.result_container} onSubmit={searchHandle}>
        <ul className={styles.filters}>
          <li className={styles.filter_item}>
            <h3 className={styles.subtitle}>Фильтры</h3>
          </li>
          <li className={styles.filter_item}>
            <p
              className={`${styles.description} ${styles.description_distant}`}
            >
              Виды спорта
            </p>
            <SearchInput
              searchingList={sports.filter((sport) =>
                sportList ? !sportList.includes(sport) : sport,
              )}
              iconType={InputIcon.DOWN_ARROW}
              iconPosition={InputIconPosition.RIGHT}
              placeholder="Добавить вид спорта"
              type="text"
              itemClickHandler={addFilter}
            />
          </li>
          <li className={styles.filter_item}>
            <p
              className={`${styles.description} ${styles.description_distant}`}
            >
              Удаленность
            </p>
            <CheckboxPanel
              btns={[
                { id: 1, title: "не важно", size: CheckboxBtnSize.SECONDARY },
                {
                  id: 2,
                  title: "1 км от дома",
                  size: CheckboxBtnSize.SECONDARY,
                },
                {
                  id: 3,
                  title: "3 км от дома",
                  size: CheckboxBtnSize.SECONDARY,
                },
              ]}
              setOption={setDistanceFromHome}
            />
          </li>
          <li className={styles.filter_item}>
            <p
              className={`${styles.description} ${styles.description_distant}`}
            >
              Цена
            </p>
            <Input
              labelName="Максимум"
              iconType={InputIcon.RUB}
              iconPosition={InputIconPosition.LEFT}
              value={price || ""}
              onChange={changePriceHandler}
            />
            <Checkbox
              title="Бесплатное пробное"
              checked={isFreeLesson}
              onChange={() => setIsFreeLesson(!isFreeLesson)}
            />
          </li>
          <li className={styles.buttonContainer}>
            <Button
              testId={ButtonTestId.FORWARD}
              color={ButtonColor.PRIMARY}
              withMinWidth
              type="submit"
            >
              Продолжить
              <Icon type={IconTypes.RIGHT_ICON} />
            </Button>
            <Badge
              isActive
              color={BadgeColor.SECONDARY}
              onClick={clearFilterList}
            >
              Сбросить все фильтры
              <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
            </Badge>
          </li>
        </ul>
        <ul className={styles.cardList}>
          <li>
            <p className={`${styles.heading} ${styles.heading_count}`}>
              Найдено {foundList.length}
            </p>
          </li>
          {mapView
            ? "Карта"
            : foundList &&
              foundList.map(() => {
                return <li>1</li>;
              })}
        </ul>
      </form>
    </section>
  );
};

export default ResultPage;
