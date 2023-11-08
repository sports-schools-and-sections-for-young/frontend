import { useState, FC } from "react";
import classnames from "classnames";
import CheckboxBtn from "../CheckboxBtn/CheckboxBtn";
import styles from "./CheckboxPanel.module.scss";

interface Btn {
  id: number;
  title: string;
}

interface CheckboxPanelProps {
  className?: string;
  setOption: (btnId: number) => void;
  btns: Btn[];
}

const CheckboxPanel: FC<CheckboxPanelProps> = (props) => {
  const { className = "", setOption, btns } = props;

  const [active, setActive] = useState(1);

  const checkboxPanelClass = classnames({
    [className]: true,
    [styles.panel]: true,
  });

  return (
    <div className={checkboxPanelClass}>
      {btns.map((btn: Btn) => (
        <CheckboxBtn
          key={btn.id}
          isActive={active === btn.id}
          onClick={() => {
            setActive(btn.id);
            setOption(btn.id);
          }}
        >
          {btn.title}
        </CheckboxBtn>
      ))}
    </div>
  );
};

export default CheckboxPanel;
