import { useContext, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./ProfileForms.module.scss";
import Gear from "../../../../assets/images/icons/Gear.svg?react";
import AppContext from "../../../../context/AppContext.ts";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import { deleteAccount } from "../../../../utils/api";
import Modal from "../../../../components/Modal/Modal.tsx";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";
import EditInfoForm from "../EditInfoForm/EditInfoForm.tsx";
import EditPasswordForm from "../EditPasswordForm/EditPasswordForm.tsx";

type ProfileFormModals = "deletion" | "logout" | null;

const ProfileForms = () => {
  const { setSchool } = useContext(AppContext);

  const [isInfoEditing, setIsInfoEditing] = useState(false);

  const [isPasswordEditing, setIsPasswordEditing] = useState(false);

  const [modal, setModal] = useState<ProfileFormModals>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["token"]);

  const handleDeletion = async () => {
    try {
      await deleteAccount(cookies.token);
      setSchool(null);
      removeCookie("token");
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setSchool(null);
    removeCookie("token");
  };

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.formContainer}>
        <div className={styles.optionsContainer}>
          <p className={styles.options}>Настройки профиля</p>
          {!isInfoEditing && (
            <button
              className={styles.editButton}
              type="button"
              onClick={() => setIsInfoEditing(true)}
            >
              <span className={styles.edit}>Редактировать</span> <Gear />
            </button>
          )}
        </div>
        <EditInfoForm
          isEditing={isInfoEditing}
          setIsEditing={setIsInfoEditing}
        />
        <div className={styles.optionsContainer}>
          <p className={styles.options}>Смена пароля</p>
          {!isPasswordEditing && (
            <button
              className={styles.editButton}
              type="button"
              onClick={() => setIsPasswordEditing(true)}
            >
              <span className={styles.edit}>Сменить пароль</span> <Gear />
            </button>
          )}
        </div>
        {isPasswordEditing && (
          <EditPasswordForm
            isEditing={isPasswordEditing}
            setIsEditing={setIsPasswordEditing}
          />
        )}
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => setModal("deletion")}
        >
          Удалить профиль
        </button>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={() => setModal("logout")}
        >
          Выйти
        </button>
        {modal === "deletion" && (
          <Modal closeModal={() => setModal(null)}>
            <ConfirmModal closeModal={() => setModal(null)}>
              <p className={styles.titleModal}>
                Вы уверены что хотите{" "}
                <span className={styles.span}>удалить аккаунт</span> с
                платформы?
              </p>
              <p className={styles.warning}>
                Все данные организации, расписание, виды спорта, стоимость будут
                удалены без возможности восстановления.
              </p>
              <div className={styles.buttonContainer}>
                <Button
                  onClick={handleDeletion}
                  color={ButtonColor.WARNING}
                  testId={ButtonTestId.OTHER}
                >
                  Удалить профиль
                </Button>
                <Button
                  onClick={() => setModal(null)}
                  color={ButtonColor.SECONDARY}
                  testId={ButtonTestId.BACK}
                >
                  Вернуться назад
                </Button>
              </div>
            </ConfirmModal>
          </Modal>
        )}
        {modal === "logout" && (
          <Modal closeModal={() => setModal(null)}>
            <ConfirmModal closeModal={() => setModal(null)}>
              <p className={styles.titleModal}>
                Вы уверены что хотите{" "}
                <span className={styles.span}>выйти из профиля</span>?
              </p>
              <p className={styles.warning}>
                Для внесения изменений в карточки секции потребуется повторный
                вход
              </p>
              <div className={styles.buttonContainer}>
                <Button
                  onClick={handleLogout}
                  color={ButtonColor.PRIMARY}
                  testId={ButtonTestId.OTHER}
                >
                  Выйти из профиля
                </Button>
                <Button
                  onClick={() => setModal(null)}
                  color={ButtonColor.SECONDARY}
                  testId={ButtonTestId.BACK}
                >
                  Вернуться назад
                </Button>
              </div>
            </ConfirmModal>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfileForms;
