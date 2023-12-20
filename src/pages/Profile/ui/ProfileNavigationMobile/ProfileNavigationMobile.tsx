import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gear from "../../../../assets/images/icons/Gear.svg?react";
import SignOut from "../../../../assets/images/icons/SignOut.svg?react";
import styles from "./ProfileNavigationMobile.module.scss";
import LogoutModal from "../LogoutModal/LogoutModal.tsx";
import { ProfileFormModals } from "../ProfileForms/ProfileForms.tsx";

const ProfileNavigationMobile = () => {
  const [modal, setModal] = useState<ProfileFormModals>(null);

  const navigate = useNavigate();

  return (
    <>
      <nav className={styles.navigation}>
        <button
          onClick={() => setModal("logout")}
          className={styles.button}
          type="button"
        >
          <SignOut />
        </button>
        <button
          onClick={() => navigate("/profile/edit")}
          className={styles.button}
          type="button"
        >
          <Gear />
        </button>
      </nav>
      {modal && <LogoutModal setModal={setModal} />}
    </>
  );
};

export default ProfileNavigationMobile;
