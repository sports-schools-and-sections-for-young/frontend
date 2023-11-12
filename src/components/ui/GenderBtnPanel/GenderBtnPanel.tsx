import { useState, FC } from "react";
import classnames from "classnames";
import GenderBtn from "../GenderBtn/GenderBtn";
import styles from "./GenderBtnPanel.module.scss";
import Icon from "../Icon/Icon.tsx";
import { IconColor, IconTypes } from "../Icon/types";

interface Btn {
  id: number;
  title: string;
  icon: string;
}

interface GenderBtnPanelProps {
  className?: string;
  setOption: (btnId: number) => void;
  btns: Btn[];
}

const CheckboxPanel: FC<GenderBtnPanelProps> = (props) => {
  const { className = "", setOption, btns } = props;

  const [active, setActive] = useState(1);

  const genderBtnPanelClass = classnames({
    [className]: true,
    [styles.panel]: true,
  });

  return (
    <div className={genderBtnPanelClass}>
      {btns.map((btn: Btn) => (
        <GenderBtn
          key={btn.id}
          isActive={active === btn.id}
          onClick={() => {
            setActive(btn.id);
            setOption(btn.id);
          }}
        >
          <Icon type={btn.icon as IconTypes} color={IconColor.SECONDARY} />
          {btn.title}
        </GenderBtn>
      ))}
    </div>
  );
};

export default CheckboxPanel;
