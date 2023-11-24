import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResultNavigate.module.scss";
import CloseButton from "../../../../components/ui/CloseButton/CloseButton.tsx";
import Button from "../../../../components/ui/Button/Button.tsx";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import CheckboxPanel from "../../../../components/ui/CheckboxPanel/CheckboxPanel.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types/index.ts";
import {
  IconColor,
  IconTypes,
} from "../../../../components/ui/Icon/types/index.ts";
import { CheckboxBtnSize } from "../../../../components/ui/CheckboxBtn/types/index.ts";
import { IResultNavigateProps } from "../../types/index.ts";

const ResultNavigate: FC<IResultNavigateProps> = (props) => {
  const { setMapView, ...rest } = props;
  const navigate = useNavigate();

  return (
    <nav className={styles.navigate} {...rest}>
      <ul className={styles.nav_list}>
        <li>
          <Button
            onClick={() => {}}
            color={ButtonColor.SECONDARY}
            testId={ButtonTestId.BACK}
          >
            <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
            Назад
          </Button>
        </li>
        <li>
          <CheckboxPanel
            btns={[
              { id: 0, title: "Список", size: CheckboxBtnSize.PRIMARY },
              { id: 2, title: "Карта", size: CheckboxBtnSize.PRIMARY },
            ]}
            setOption={setMapView}
          />
        </li>
        <li>
          <CloseButton className={styles.close} onClick={() => navigate("/")} />
        </li>
      </ul>
    </nav>
  );
};

export default ResultNavigate;
