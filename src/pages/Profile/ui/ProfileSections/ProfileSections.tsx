import { ChangeEvent, FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileSections.module.scss";
import Button from "../../../../components/ui/Button/Button";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon";
import AppContext from "../../../../context/AppContext";
import { useResize } from "../../../../hooks/useResize";
import Badge from "../../../../components/ui/Badge/Badge";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Trash from "../../../../assets/images/icons/delete-section.svg?react";
import Edit from "../../../../assets/images/icons/edit-section.svg?react";
import { Section } from "../../../../types";
import { parseSport } from "../../../../utils/functions";
import { deleteSection } from "../../../../utils/api";
import ResultNotFound from "../../../../components/ResultNotFound/ResultNotFound";
import { ActionType } from "../../../../components/ResultNotFound/types";
import Schedule from "../../../../components/ui/Shedule/Schedule";
import Modal from "../../../../components/Modal/Modal";
import { ModalType } from "../../../../components/Modal/types";

const ProfileSections: FC = () => {
  const navigate = useNavigate();
  const { school, sports, setSchool } = useContext(AppContext);
  const { isMobileScreen } = useResize();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState<boolean>(false);
  const [checkedSections, setCheckedSections] = useState<number[]>([]);

  const toggleSections = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && school) {
      setCheckedSections(school.sections.map((s) => s.id));
    } else {
      setCheckedSections([]);
    }
  };

  const toggleSection = (id: number) => {
    if (!checkedSections.includes(id)) {
      setCheckedSections((prev) => [...prev, id]);
    } else {
      setCheckedSections((prev) => prev.filter((s) => s !== id));
    }
  };

  const handleDelete = () => {
    return deleteSection(
      "c9ab59f7cd24ef8735749254bea3666a14e1b769",
      checkedSections[0],
    )
      .then((res) => (res.ok ? checkedSections[0] : Promise.reject(res)))
      .then((id) => {
        setSchool({
          info: school?.info,
          sections: school?.sections?.filter((p) => p.id !== id),
        });
        setDeleteModal(false);
        setCheckedSections([]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className={styles.sections}>
      {deleteModal && (
        <Modal
          type={ModalType.DELETE}
          closeModal={() => setDeleteModal(false)}
          title="Вы уверены, что хотите удалить секцию?"
          description="Все данные о секции будут удалены без возможности восстановления."
          action={handleDelete}
          actionDescription="Удалить секцию"
        />
      )}
      {infoModal && (
        <Modal
          closeModal={() => setInfoModal(false)}
          title="Заполните профиль"
          description="После заполнения профиля Вы сможете добавлять секции "
          action={() => navigate("/profile/edit")}
          actionDescription="Заполнить профиль"
        />
      )}
      <h2 className={styles.title}>Секции</h2>
      {school && school.sections.length < 1 ? (
        <ResultNotFound
          title="Пока ничего не добавлено"
          type={ActionType.ADD}
        />
      ) : !isMobileScreen ? (
        <>
          <div className={styles.buttonContainer}>
            <Button
              testId={ButtonTestId.OTHER}
              color={ButtonColor.SECONDARY}
              withMinWidth
              type="button"
              onClick={() => navigate("/addsection")}
            >
              <Icon type={IconTypes.PLUS} color={IconColor.SECONDARY} />
              Добавить секцию
            </Button>
            {checkedSections.length === 1 && (
              <button
                type="button"
                className={styles.button}
                onClick={() =>
                  navigate("/editsection", {
                    state: { forEditing: checkedSections[0] },
                  })
                }
              >
                <Edit />
              </button>
            )}
            {checkedSections.length > 0 && (
              <button
                type="button"
                className={`${styles.button} ${styles.buttonTrash}`}
                onClick={() => setDeleteModal(true)}
              >
                <Trash />
              </button>
            )}
          </div>
          <table className={styles.table}>
            <thead className={styles.tableHeading}>
              <tr>
                <th className={styles.checkCol}>
                  <input
                    type="checkbox"
                    className={styles.tableCheckbox}
                    onChange={toggleSections}
                    checked={checkedSections.length === school?.sections.length}
                  />
                </th>
                <th className={styles.sportCol}>Виды спорта</th>
                <th className={styles.dayCol}>Дни недели</th>
                <th className={styles.addressCol}>Адрес</th>
                <th className={styles.priceCol}>Цена</th>
              </tr>
            </thead>
            <tbody>
              {school &&
                school.sections.map((section: Section) => {
                  return (
                    <tr
                      className={`${styles.tableRow} ${
                        checkedSections.includes(section.id)
                          ? styles.activeRow
                          : ""
                      }`}
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                    >
                      <td>
                        <input
                          className={styles.tableCheckbox}
                          type="checkbox"
                          readOnly
                          checked={checkedSections.includes(section.id)}
                        />
                      </td>
                      <td className={styles.sport}>
                        {parseSport(section.sport_type, sports)}
                      </td>
                      <td className={styles.schedule}>
                        <Schedule
                          schedule={section.schedule}
                          isMobile={isMobileScreen}
                        />
                      </td>
                      <td className={styles.address}>{section.address}</td>
                      <td className={styles.price}>{section.price}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      ) : (
        <ul className={styles.sectionList}>
          {school?.sections.map((section) => {
            return (
              <li key={section.id}>
                <article className={styles.sectionCard}>
                  <div className={styles.buttonContainer}>
                    <Badge isActive color={BadgeColor.PRIMARY}>
                      {parseSport(section.sport_type, sports)}
                    </Badge>
                    <button
                      type="button"
                      className={styles.button}
                      onClick={() =>
                        navigate("/editsection", {
                          state: { forEditing: checkedSections[0] },
                        })
                      }
                    >
                      <Edit />
                    </button>
                    <button
                      type="button"
                      className={`${styles.button} ${styles.buttonTrash}`}
                      onClick={() => {
                        setCheckedSections([section.id]);
                        setDeleteModal(true);
                      }}
                    >
                      <Trash />
                    </button>
                  </div>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <p className={styles.address}>{section.address}</p>
                  <span className={styles.schedule}>
                    <Schedule
                      schedule={section.schedule}
                      isMobile={isMobileScreen}
                    />
                  </span>
                  <p className={styles.price}>{section.price}</p>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ProfileSections;
