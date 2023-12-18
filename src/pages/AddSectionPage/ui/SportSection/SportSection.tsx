/// <reference types="vite-plugin-svgr/client" />
import { FC, useContext, useState, useEffect } from "react";
import { SportSectionProps  } from "../../types";
import styles from "./SportSection.module.scss";
import AppContext from "../../../../context/AppContext.ts";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { Sport } from "../../../../types";
import SearchInput from "../../../../components/ui/SearchInput/SearchInput.tsx";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
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

const SportSection: FC<SportSectionProps> = ({ setValid }) => {
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);
  const [fullView, setFullView] = useState(false);

  useEffect(() => {
    // Проверяем, выбран ли хотя бы один вид спорта
    const isValid = !!sectionRequest.sports && sectionRequest.sports.length > 0;
    setValid(isValid);
  }, [sectionRequest.sports, setValid]);

  const addSport = (sport: Sport) => {
    const updatedSports = sectionRequest.sports
      ? [...sectionRequest.sports, sport]
      : [sport];
    setSectionRequest({ ...sectionRequest, sports: updatedSports });
  };

  const deleteSport = (id: number) => {
    let updatedSports: Sport[] | undefined | null =
      sectionRequest.sports?.filter((sport) => sport.id !== id);
    if (!updatedSports || !updatedSports.length) {
      updatedSports = null;
    }
    setSectionRequest({ ...sectionRequest, sports: updatedSports });
  };

  const notSelectedSports = sports.filter(
    (sport) =>
      !sectionRequest.sports?.some(
        (selectedSport) => selectedSport.id === sport.id,
      ),
  );

  return (
    <section className={styles.step}>
      <h2 className={styles.title}>
        1.&nbsp;Выберите <span className={styles.span}>вид спорта</span>
      </h2>
      <p className={styles.subtitle}>
        Можете выбрать только один вариант
      </p>
      <ul className={styles.selected}>
        {sectionRequest.sports?.map((sport) => (
          <Badge
            key={sport.id}
            color={BadgeColor.PRIMARY}
            isActive
            onClick={() => deleteSport(sport.id)}
          >
            {sport.title}
            <Icon
              type={IconTypes.CROSS}
              color={IconColor.SECONDARY}
              size={IconSize.EXTRA_SMALL}
            />
          </Badge>
        ))}
      </ul>
      <SearchInput
        searchingList={notSelectedSports}
        itemClickHandler={addSport}
        iconType={InputIcon.DOWN_ARROW}
        iconPosition={InputIconPosition.RIGHT}
        placeholder="Выберите вид спорта"
      />
      <ul className={styles.selected}>
        {fullView
          ? notSelectedSports.map((sport) => (
              <Badge
                key={sport.id}
                color={BadgeColor.PRIMARY}
                isActive={false}
                onClick={() => addSport(sport)}
              >
                {sport.title}
              </Badge>
            ))
          : notSelectedSports.slice(0, 8).map((sport) => (
              <Badge
                key={sport.id}
                color={BadgeColor.PRIMARY}
                isActive={false}
                onClick={() => addSport(sport)}
              >
                {sport.title}
              </Badge>
            ))}
      </ul>
      <button
        type="button"
        className={styles.fullViewButton}
        onClick={() => setFullView(!fullView)}
      >
        {fullView ? (
          <>
            <Icon
              className={styles.icon}
              type={IconTypes.CROSS}
              size={IconSize.EXTRA_SMALL}
              color={IconColor.SECONDARY}
            />
            Скрыть
          </>
        ) : (
          <>
            <Icon
              className={styles.icon}
              type={IconTypes.PLUS}
              size={IconSize.EXTRA_SMALL}
              color={IconColor.SECONDARY}
            />
            Показать больше
          </>
        )}
      </button>
    </section>
  );
};

export default SportSection;
