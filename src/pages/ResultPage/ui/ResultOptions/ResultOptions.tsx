import { FC, useContext } from "react";
import { Sport } from "../../../../types";
import Icon from "../../../../components/ui/Icon/Icon";
import Badge from "../../../../components/ui/Badge/Badge";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import styles from "./ResultOptions.module.scss";
import AppContext from "../../../../context/AppContext";
import { ResultOptionsProps } from "../../types";
import { maxAge, minAge } from "../../../../utils/variables.ts";

const ResultOptions: FC<ResultOptionsProps> = (props) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);
  const { clearFilters } = props;

  const clearChieldAge = () => {
    setSectionRequest((request) => {
      return { ...request, age: null };
    });
  };

  const clearChieldGender = () => {
    setSectionRequest((request) => {
      return { ...request, gender: null };
    });
  };

  const deleteSport = (sport: Sport) => {
    setSectionRequest((request) => {
      if (request.sports) {
        return {
          ...request,
          sports: request.sports.filter(
            (selectedSport) => selectedSport.id !== sport.id,
          ),
        };
      }
      return request;
    });
  };

  return (
    <ul className={styles.options}>
      <li className={sectionRequest.gender ? "" : styles.hide}>
        <Badge isActive color={BadgeColor.PRIMARY} onClick={clearChieldGender}>
          {sectionRequest.gender === "Man" && (
            <Icon type={IconTypes.BOY} color={IconColor.SECONDARY} />
          )}
          {sectionRequest.gender === "Woman" && (
            <Icon type={IconTypes.GIRL} color={IconColor.SECONDARY} />
          )}
          {sectionRequest.gender === "Man" && "мальчик"}
          {sectionRequest.gender === "Woman" && "девочка"}{" "}
          <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
        </Badge>
      </li>
      <li
        className={
          sectionRequest.age &&
          sectionRequest.age >= minAge &&
          sectionRequest.age <= maxAge
            ? ""
            : styles.hide
        }
      >
        <Badge isActive color={BadgeColor.PRIMARY} onClick={clearChieldAge}>
          {sectionRequest.age &&
            sectionRequest.age > 0 &&
            `Возраст: ${sectionRequest.age}`}
          <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
        </Badge>
      </li>
      {sectionRequest.sports &&
        sectionRequest.sports.length > 0 &&
        sectionRequest.sports.map((sport) => {
          return (
            <li key={sport.id}>
              <Badge
                isActive
                color={BadgeColor.PRIMARY}
                onClick={() => deleteSport(sport)}
              >
                {sport.title}
                <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
              </Badge>
            </li>
          );
        })}
      <li
        className={
          sectionRequest.sports ||
          sectionRequest.gender ||
          (sectionRequest.age &&
            sectionRequest.age >= minAge &&
            sectionRequest.age <= maxAge)
            ? ""
            : styles.hide
        }
      >
        <Badge isActive color={BadgeColor.SECONDARY} onClick={clearFilters}>
          Сбросить все фильтры
          <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
        </Badge>
      </li>
    </ul>
  );
};

export default ResultOptions;
