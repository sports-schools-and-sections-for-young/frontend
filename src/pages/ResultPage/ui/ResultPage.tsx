import React, { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultPage.module.scss";
import CheckboxPanel from "../../../components/ui/CheckboxPanel/CheckboxPanel";
import Button from "../../../components/ui/Button/Button";
import Icon from "../../../components/ui/Icon/Icon";
import Badge from "../../../components/ui/Badge/Badge";
import { ButtonColor, ButtonTestId } from "../../../components/ui/Button/types";
import { IconColor, IconTypes } from "../../../components/ui/Icon/types";
import Checkbox from "../../../components/ui/Checkbox/Checkbox";
import { CheckboxBtnSize } from "../../../components/ui/CheckboxBtn/types";
import Input from "../../../components/ui/Input/Input";
import SearchInput from "../../../components/ui/SearchInput/SearchInput";
import { BadgeColor } from "../../../components/ui/Badge/types";
import AppContext from "../../../context/AppContext";
import ResultCard from "./ResultCard/ResultCard";
import ResultHeader from "./ResultHeader/ResultHeader";
import CloseButton from "../../../components/ui/CloseButton/CloseButton.tsx";
import { Sport, Section } from "../../../types";
import {
  InputIcon,
  InputIconPosition,
} from "../../../components/ui/InputField/types";
import Header from "../../../components/ui/Header/Header";

interface IResultPageProps {
  isFree?: boolean;
}

interface IChieldInfo {
  age: number | null;
  gender: "male" | "female" | null;
}

const ResultPage: FC<IResultPageProps> = (props) => {
  const { sports, sectionRequest, setSectionRequest, filteredSections } =
    useContext(AppContext);
  const { gender, age, distance, maxPrice, location } = sectionRequest;
  const { isFree = false } = props;

  const navigate = useNavigate();

  const [chieldInfo, setChieldInfo] = useState<IChieldInfo>({ gender, age });
  const [sportList, setSportList] = useState<Sport[] | null>(
    sectionRequest.sports,
  );
  const [distanceFromHome, setDistanceFromHome] = useState<number | null>(
    distance,
  );
  const [mapView, setMapView] = useState<number>(0);
  const [foundList] = useState<Section[]>(filteredSections);
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
    <>
      <Header />
      <ResultHeader>
        <>
          <Button
            onClick={() => {}}
            color={ButtonColor.SECONDARY}
            testId={ButtonTestId.BACK}
          >
            <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
            Назад
          </Button>
          <CheckboxPanel
            btns={[
              { id: 1, title: "Список", size: CheckboxBtnSize.PRIMARY },
              { id: 2, title: "Карта", size: CheckboxBtnSize.PRIMARY },
            ]}
            setOption={setMapView}
          />
        </>

        <CloseButton className={styles.close} onClick={() => navigate("/")} />
      </ResultHeader>
      <section className={styles.result}>
        <h2 className={styles.title}>
          Результаты поиска
          {mapView === 2 && (
            <span className={styles.description}>
              {filteredSections.length} секций
            </span>
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
                  {
                    id: 1,
                    title: "не важно",
                    size: CheckboxBtnSize.SECONDARY,
                  },
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
            {mapView === 2
              ? "Карта"
              : foundList &&
                filteredSections.map((section) => {
                  return (
                    <ResultCard
                      key={section.id}
                      id={section.id}
                      sport_type={section.sport_type}
                      title={section.sport_organization}
                      sport_organization={section.sport_organization}
                      address={section.address}
                      price={section.price}
                      raiting={section.rating}
                      review_amount={section.review_amount}
                      shedule={{
                        days: "Понедельник",
                        time: section.schedule.time,
                      }}
                      gender={section.gender}
                    />
                  );
                })}
          </ul>
        </form>
      </section>
      <footer className={styles.footer}>{}</footer>
    </>
  );
};

export default ResultPage;
