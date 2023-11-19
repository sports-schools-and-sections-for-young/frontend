import { FC, useContext, useState } from "react";
import { StepProps } from "../../types";
import styles from "./StepSports.module.scss";
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
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";

const StepSports: FC<StepProps> = ({ step, setStep }) => {
  const { sports, sectionRequest, setSectionRequest } = useContext(AppContext);
  const [fullView, setFullView] = useState(false);

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
    <div className={styles.step}>
      <h2 className={styles.title}>
        Какие <span className={styles.span}>виды спорта</span> интересны вашему
        ребенку?
      </h2>
      <p className={styles.subtitle}>
        Вы можете выбрать несколько видов спорта
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
      <Button
        onClick={() => setStep(step + 1)}
        className={styles.button}
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.FORWARD}
      >
        Продолжить <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default StepSports;
