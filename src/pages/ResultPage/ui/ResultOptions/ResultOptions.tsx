import { FC, useContext } from "react";
import { Sport } from "../../../../types";
import Icon from "../../../../components/ui/Icon/Icon";
import Badge from "../../../../components/ui/Badge/Badge";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import styles from "./ResultOptions.module.scss";
import AppContext from "../../../../context/AppContext";
import { ResultOptionsProps } from "../../types";

const ResultOptions: FC<ResultOptionsProps> = (props) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);
  const { clearFilters } = props;
  const clearChieldFilter = () => {
    setSectionRequest((request) => {
      return { ...request, age: null, gender: null };
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
      <li>
        {(sectionRequest.gender || sectionRequest.age) && (
          <Badge
            isActive
            color={BadgeColor.PRIMARY}
            onClick={clearChieldFilter}
          >
            {sectionRequest.gender === "male" && (
              <Icon type={IconTypes.BOY} color={IconColor.SECONDARY} />
            )}
            {sectionRequest.gender === "female" && (
              <Icon type={IconTypes.GIRL} color={IconColor.SECONDARY} />
            )}
            {sectionRequest.gender === "male" && "мальчик"}
            {sectionRequest.gender === "female" && "девочка"}{" "}
            {sectionRequest.age && sectionRequest.age > 0
              ? sectionRequest.age
              : ""}
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          </Badge>
        )}
      </li>
      {sectionRequest.sports &&
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
      <li>
        {(sectionRequest.sports ||
          sectionRequest.gender ||
          sectionRequest.age) && (
          <Badge isActive color={BadgeColor.SECONDARY} onClick={clearFilters}>
            Сбросить все фильтры
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          </Badge>
        )}
      </li>
    </ul>
  );
};

export default ResultOptions;
