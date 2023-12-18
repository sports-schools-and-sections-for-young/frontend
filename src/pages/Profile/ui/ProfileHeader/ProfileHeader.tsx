import { useContext } from "react";
import styles from "./ProfileHeader.module.scss";
import AppContext from "../../../../context/AppContext.ts";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation.tsx";

const ProfileHeader = () => {
  const { school } = useContext(AppContext);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>Личный кабинет</h1>
          {school?.info && (
            <p className={styles.schoolName}>{school.info.title}</p>
          )}
          {school?.info && (
            <p className={styles.address}>{school.info.address}</p>
          )}
        </div>
        <ProfileNavigation />
      </div>
    </div>
  );
};

export default ProfileHeader;
