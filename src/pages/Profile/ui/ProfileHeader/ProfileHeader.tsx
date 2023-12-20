import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProfileHeader.module.scss";
import AppContext from "../../../../context/AppContext.ts";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation.tsx";
import { useResize } from "../../../../hooks/useResize.tsx";
import MobileNavigation from "../MobileNavigation/MobileNavigation.tsx";
import ProfileNavigationMobile from "../ProfileNavigationMobile/ProfileNavigationMobile.tsx";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";

const ProfileHeader = () => {
  const { school } = useContext(AppContext);

  const { isMobileScreen } = useResize();

  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      {isMobileScreen && <MobileNavigation />}
      <div className={styles.mainContainer}>
        <div className={styles.info}>
          <h1 className={styles.title}>Личный кабинет</h1>
          {school?.info && (
            <p className={styles.schoolName}>{school.info.title}</p>
          )}
          {school?.info && (
            <p className={styles.address}>{school.info.address}</p>
          )}
        </div>
        {!isMobileScreen ? <ProfileNavigation /> : <ProfileNavigationMobile />}
      </div>
      {isMobileScreen && (
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            onClick={() => navigate("/profile")}
            color={ButtonColor.PRIMARY}
            testId={ButtonTestId.OTHER}
          >
            Мои секции
          </Button>
          <Button
            testId={ButtonTestId.OTHER}
            className={styles.button}
            color={ButtonColor.SECONDARY}
            withMinWidth
            type="button"
            onClick={() => navigate("/addsection")}
          >
            <Icon type={IconTypes.PLUS} color={IconColor.SECONDARY} />
            Добавить секцию
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
