import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FavouriteNavigate.module.scss";
import CloseButton from "../../../../components/ui/CloseButton/CloseButton.tsx";
import Button from "../../../../components/ui/Button/Button.tsx";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types/index.ts";
import {
  IconColor,
  IconTypes,
} from "../../../../components/ui/Icon/types/index.ts";
import ButtonBackMobile from "../../../../components/ui/ButtonBackMobile/ButtonBackMobile.tsx";

const FavouriteNavigate: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navigate}>
      <ul className={styles.nav_list}>
        <li className={styles.mobileItem}>
          <ButtonBackMobile onClick={() => navigate(-1)} />
        </li>
        <li className={styles.desctopItem}>
          <Button
            onClick={() => navigate(-1)}
            color={ButtonColor.SECONDARY}
            testId={ButtonTestId.BACK}
          >
            <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
            Назад
          </Button>
        </li>
        <li className={styles.mobileItem}>
          <h2 className={styles.title}>Избранное</h2>
        </li>
        <li>
          <CloseButton className={styles.close} onClick={() => navigate("/")} />
        </li>
      </ul>
    </nav>
  );
};

export default FavouriteNavigate;
