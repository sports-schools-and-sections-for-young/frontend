/// <reference types="vite-plugin-svgr/client" />
import { FC, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { SportSectionProps } from "../../types";
import styles from "./SportSection.module.scss";
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
import { addSportType, getAllSports } from "../../../../utils/api/index.ts";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types/index.ts";
import Modal from "../../../../components/Modal/Modal.tsx";
import ModalContent from "../../../../components/ModalContent/ModalContent.tsx";
import { ModalType } from "../../../../components/ModalContent/types/index.ts";

const SportSection: FC<SportSectionProps> = (props) => {
  const [cookies] = useCookies(["token"]);
  const { token } = cookies;

  const { request, setRequest, setValid } = props;
  const [sports, setSports] = useState<Sport[]>([]);
  const [newSport, setNewSport] = useState<string | null>(null);
  const [isSuccsess, setIsSuccsess] = useState<boolean>(false);
  const [fullView, setFullView] = useState(false);
  const [addNewSport, setAddNewSport] = useState(false);

  useEffect(() => {
    const loadSportList = async () => {
      const list = await getAllSports();
      setSports(list);
    };
    loadSportList();
  }, []);

  useEffect(() => {
    if (!request.sport_type) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [request.sport_type]);

  const chooseSport = (sportId: number) => {
    setRequest({ ...request, sport_type: sportId });
  };

  const handleAddSport = () => {
    if (newSport && !sports.some((s) => s.title === newSport)) {
      addSportType(token, newSport)
        .then((res) => {
          setSports([...sports, res]);
          setNewSport(null);
          setIsSuccsess(true);
        })
        .catch((e) => {
          console.log("Ошибка добавления нового типа спорта", e);
        });
    } else {
      console.log("Cпорт уже есть в списке");
    }
  };

  return (
    <section className={styles.step}>
      {isSuccsess && (
        <Modal closeModal={() => setIsSuccsess(false)}>
          <ModalContent
            type={ModalType.SUCCSESS}
            title="Новый спорт добавлен!"
            back={() => setIsSuccsess(false)}
            actionDescription="Вернуться в профиль"
          />
        </Modal>
      )}
      <h2 className={styles.title}>
        1.&nbsp;Выберите <span className={styles.span}>вид спорта</span>
      </h2>
      <p className={styles.subtitle}>Можете выбрать только один вариант</p>
      <SearchInput
        searchingList={sports}
        itemClickHandler={(e) => chooseSport(e.id)}
        iconType={InputIcon.DOWN_ARROW}
        iconPosition={InputIconPosition.RIGHT}
        placeholder="Выберите вид спорта"
      />
      <ul className={styles.selected}>
        {fullView
          ? sports.map((sport) => (
              <li key={sport.id}>
                <Badge
                  color={BadgeColor.PRIMARY}
                  isActive={request.sport_type === sport.id}
                  onClick={() => chooseSport(sport.id)}
                >
                  {sport.title}
                </Badge>
              </li>
            ))
          : sports.slice(0, 8).map((sport) => (
              <li key={sport.id}>
                <Badge
                  key={sport.id}
                  color={BadgeColor.PRIMARY}
                  isActive={request.sport_type === sport.id}
                  onClick={() => chooseSport(sport.id)}
                >
                  {sport.title}
                </Badge>
              </li>
            ))}
      </ul>
      <Badge
        color={BadgeColor.PRIMARY}
        isActive={addNewSport}
        onClick={() => setAddNewSport((p) => !p)}
      >
        Добавить свой вид спорта
      </Badge>
      {addNewSport && (
        <>
          <div className={styles.addsportList}>
            <SearchInput
              searchingList={sports}
              itemClickHandler={(e) => chooseSport(e.id)}
              value={newSport || ""}
              onChange={(e) =>
                setNewSport(e.target.value.length > 0 ? e.target.value : null)
              }
              iconType={InputIcon.DOWN_ARROW}
              iconPosition={InputIconPosition.RIGHT}
              placeholder="Выберите вид спорта"
            />
          </div>
          <Button
            color={ButtonColor.PRIMARY}
            testId={ButtonTestId.OTHER}
            onClick={() => handleAddSport()}
          >
            Добавить вид спорта
          </Button>
        </>
      )}
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
