import { FC, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
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
import { deleteSection } from "../../../../utils/api";
import ResultNotFound from "../../../../components/ResultNotFound/ResultNotFound";
import { ActionType } from "../../../../components/ResultNotFound/types";
import Schedule from "../../../../components/ui/Shedule/Schedule";
import Modal from "../../../../components/Modal/Modal";
import { ModalType } from "../../../../components/ModalContent/types";
import ModalContent from "../../../../components/ModalContent/ModalContent";

const ProfileSections: FC = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const { token } = cookies;
  const { school, setSchool } = useContext(AppContext);
  const { isMobileScreen } = useResize();
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState<boolean>(false);

  const [checkedSection, setCheckedSection] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!school) {
        setInfoModal(true);
      }
    }, 1000);
    if (school) {
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [school]);

  console.log(school);

  const toggleSection = (id: number) => {
    if (id === checkedSection) {
      setCheckedSection(null);
      return;
    }
    setCheckedSection(id);
  };

  const handleDelete = () => {
    if (checkedSection && school) {
      deleteSection(token, checkedSection)
        .then((res) => (res.ok ? checkedSection : Promise.reject(res)))
        .then((id) => {
          setSchool({
            info: school.info,
            sections: school.sections?.filter((p) => p.id !== id),
          });
          setDeleteModal(false);
          setCheckedSection(null);
        })
        .catch((e) => console.log(e));
    }
  };
  const checkProgileFilling = () => {
    if (school) {
      navigate("/addsection", { state: { edit: true } });
    } else {
      setInfoModal(true);
    }
  };

  return (
    <section className={styles.sections}>
      {deleteModal && (
        <Modal closeModal={() => setDeleteModal(false)}>
          <ModalContent
            type={ModalType.DELETE}
            closeModal={() => setDeleteModal(false)}
            title="Вы уверены, что хотите удалить секцию?"
            description="Все данные о секции будут удалены без возможности восстановления."
            action={handleDelete}
            actionDescription="Удалить секцию"
          />
        </Modal>
      )}
      {infoModal && (
        <Modal closeModal={() => {}}>
          <ModalContent
            closeModal={() => {}}
            title="Заполните профиль"
            description="После заполнения профиля Вы сможете добавлять секции "
            action={() =>
              navigate("/profile/edit", { state: { redirected: true } })
            }
            actionDescription="Заполнить профиль"
          />
        </Modal>
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
              onClick={checkProgileFilling}
            >
              <Icon type={IconTypes.PLUS} color={IconColor.SECONDARY} />
              Добавить секцию
            </Button>
            {checkedSection && (
              <>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => {
                    navigate("/addsection", {
                      state: { forEditing: checkedSection },
                    });
                    setCheckedSection(null);
                  }}
                >
                  <Edit />
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.buttonTrash}`}
                  onClick={() => setDeleteModal(true)}
                >
                  <Trash />
                </button>
              </>
            )}
          </div>
          {school && (
            <table className={styles.table}>
              <thead className={styles.tableHeading}>
                <tr>
                  <th className={styles.checkCol}>{}</th>
                  <th className={styles.sportCol}>Виды спорта</th>
                  <th className={styles.dayCol}>Дни недели</th>
                  <th className={styles.addressCol}>Адрес</th>
                  <th className={styles.priceCol}>Цена</th>
                </tr>
              </thead>
              <tbody>
                {school.sections.map((section: Section) => {
                  return (
                    <tr
                      className={`${styles.tableRow} 
                    ${checkedSection === section.id ? styles.activeRow : ""}`}
                      key={section.id}
                      onClick={() => toggleSection(section.id)}
                    >
                      <td>
                        <input
                          className={styles.tableCheckbox}
                          type="checkbox"
                          readOnly
                          checked={checkedSection === section.id}
                        />
                      </td>
                      <td className={styles.sport}>{section.sport_type}</td>
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
          )}
        </>
      ) : (
        <ul className={styles.sectionList}>
          {school?.sections.map((section) => {
            return (
              <li key={section.id}>
                <article className={styles.sectionCard}>
                  <div className={styles.buttonContainer}>
                    <Badge isActive color={BadgeColor.PRIMARY}>
                      {section.sport_type}
                    </Badge>
                    <button
                      type="button"
                      className={styles.button}
                      onClick={() => {
                        navigate("/editsection", {
                          state: { forEditing: checkedSection },
                        });
                        setCheckedSection(null);
                      }}
                    >
                      <Edit />
                    </button>
                    <button
                      type="button"
                      className={`${styles.button} ${styles.buttonTrash}`}
                      onClick={() => {
                        setCheckedSection(section.id);
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
