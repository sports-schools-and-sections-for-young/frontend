import { Dispatch, FC, SetStateAction, useContext } from "react";
import { useCookies } from "react-cookie";
import Modal from "../../../../components/Modal/Modal.tsx";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";
import styles from "../ProfileForms/ProfileForms.module.scss";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import AppContext from "../../../../context/AppContext.ts";
import { ProfileFormModals } from "../ProfileForms/ProfileForms.tsx";

interface LogoutModalProps {
  setModal: Dispatch<SetStateAction<ProfileFormModals>>;
}

const LogoutModal: FC<LogoutModalProps> = ({ setModal }) => {
  const { setSchool } = useContext(AppContext);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, __, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    setSchool(null);
    removeCookie("token", { path: "/" });
    removeCookie("token", { path: "/profile" });
  };

  return (
    <Modal closeModal={() => setModal(null)}>
      <ConfirmModal closeModal={() => setModal(null)}>
        <p className={styles.titleModal}>
          Вы уверены что хотите{" "}
          <span className={styles.span}>выйти из профиля</span>?
        </p>
        <p className={styles.warning}>
          Для внесения изменений в карточки секции потребуется повторный вход
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
  );
};

export default LogoutModal;
