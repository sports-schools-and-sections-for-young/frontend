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

const ProfileSections: FC = () => {
  const navigate = useNavigate();
  const { school } = useContext(AppContext);
  const { isMobileScreen } = useResize();
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

  return (
    <section className={styles.sections}>
      <h2 className={styles.title}>Секции</h2>
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
        <button type="button" className={styles.button}>
          <Edit />
        </button>
        <button type="button" className={styles.button}>
          <Trash />
        </button>
      </div>
      {!isMobileScreen && (
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
              school.sections.map((section) => {
                return (
                  <tr
                    className={styles.tableRow}
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                  >
                    <td>
                      <input
                        className={styles.tableCheckbox}
                        type="checkbox"
                        checked={checkedSections.includes(section.id)}
                        onChange={() => toggleSection(section.id)}
                      />
                    </td>
                    <td className={styles.sport}>{section.sport_type}</td>
                    <td className={styles.schedule}>{section.schedule}</td>
                    <td className={styles.address}>{section.address}</td>
                    <td className={styles.price}>{section.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
      {isMobileScreen && (
        <ul className={styles.sectionList}>
          {school?.sections.map((section) => {
            return (
              <li key={section.id}>
                <article>
                  <Badge isActive color={BadgeColor.PRIMARY}>
                    {section.sport_type}
                  </Badge>
                  <button type="button" className={styles.button}>
                    <Edit />
                  </button>
                  <button type="button" className={styles.button}>
                    <Trash />
                  </button>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <p className={styles.address}>{section.address}</p>
                  <p className={styles.schedule}>{section.schedule}</p>
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
