import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
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
import {
  IconColor,
  IconSize,
  IconTypes,
} from "../../../../components/ui/Icon/types";
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
import GenderBtn from "../../../../components/ui/GenderBtn/GenderBtn.tsx";
import { maxAge, minAge } from "../../../../utils/variables.ts";
import {
  abbreviateWeekDayName,
  getDeclension,
} from "../../../../utils/functions/index.ts";
import { Weekday, weekdays } from "../../../../utils/constants/week.ts";

interface AgeField {
  age: number;
}

const ResultFilters: FC<IResultFiltersProps> = (props) => {
  const { clearFilters, setLoader, isOpen, toggleFilterPanel, isMobile } =
    props;
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);
  const {
    register,
    formState: { errors },
  } = useForm<AgeField>({ mode: "onChange" });

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

  const setSchedule = (day: Weekday, isCheck: boolean) => {
    const dayNumber = weekdays.indexOf(day) + 1;
    if (!sectionRequest.schedule || sectionRequest.schedule.length === 0)
      return [dayNumber];
    const isInclude = sectionRequest.schedule.includes(dayNumber);
    if (isCheck) {
      return isInclude
        ? sectionRequest.schedule
        : [...sectionRequest.schedule, dayNumber];
    }
    if (isInclude) {
      const arr = sectionRequest.schedule.filter((d) => d !== dayNumber);
      return arr.length === 0 ? null : arr;
    }
    return sectionRequest.schedule;
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
        <li>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Дни недели
          </p>
          <div className={styles.weekdaysContainer}>
            {weekdays.map((day, i) => {
              return (
                <Checkbox
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  title={abbreviateWeekDayName(day, isMobile)}
                  checked={
                    sectionRequest.schedule?.includes(
                      weekdays.indexOf(day) + 1,
                    ) || false
                  }
                  onChange={(e) =>
                    setSectionRequest({
                      ...sectionRequest,
                      schedule: setSchedule(day, e.target.checked),
                    })
                  }
                />
              );
            })}
          </div>
        </li>
        <li>
          {" "}
          <div className={styles.genderContainer}>
            <GenderBtn
              isActive={sectionRequest.gender === "Woman"}
              onClick={() =>
                setSectionRequest({
                  ...sectionRequest,
                  gender: sectionRequest.gender === "Woman" ? null : "Woman",
                })
              }
            >
              <Icon
                type={IconTypes.GIRL}
                size={IconSize.BIG}
                color={IconColor.SECONDARY}
              />{" "}
              девочка
            </GenderBtn>
            <GenderBtn
              isActive={sectionRequest.gender === "Man"}
              onClick={() =>
                setSectionRequest({
                  ...sectionRequest,
                  gender: sectionRequest.gender === "Man" ? null : "Man",
                })
              }
            >
              <Icon
                type={IconTypes.BOY}
                size={IconSize.BIG}
                color={IconColor.SECONDARY}
              />{" "}
              мальчик
            </GenderBtn>
          </div>
        </li>
        <li>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Возраст ребёнка
          </p>
          <Input
            type="number"
            className={styles.numberInput}
            {...register("age", {
              min: {
                value: minAge,
                message: `Минимальный возраст: ${minAge} ${getDeclension(
                  minAge,
                  ["год", "года", "лет"],
                )}`,
              },
              max: {
                value: maxAge,
                message: `Максимальный возраст: ${maxAge} ${getDeclension(
                  maxAge,
                  ["год", "года", "лет"],
                )}`,
              },
              onChange: (e) =>
                setSectionRequest({ ...sectionRequest, age: +e.target.value }),
            })}
            value={sectionRequest.age || ""}
            hasError={Boolean(errors.age)}
            errorMessage={errors.age?.message}
          />
        </li>
        <li className={styles.filter_item}>
          <p className={`${styles.description} ${styles.description_distant}`}>
            Удаленность
          </p>
          <CheckboxPanel
            className={styles.distanceChoose}
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
            className={styles.numberInput}
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
