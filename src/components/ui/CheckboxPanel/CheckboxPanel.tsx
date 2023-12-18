import { FC } from "react";
import classnames from "classnames";
import CheckboxBtn from "../CheckboxBtn/CheckboxBtn";
import styles from "./CheckboxPanel.module.scss";
import { Btn, CheckboxPanelProps } from "./types";

const CheckboxPanel: FC<CheckboxPanelProps> = (props) => {
  const { className = "", setOption, btns, activeOption } = props;

  const checkboxPanelClass = classnames({
    [className]: true,
    [styles.panel]: true,
  });

  return (
    <div className={checkboxPanelClass}>
      {btns.map((btn: Btn) => (
        <CheckboxBtn
          key={btn.id}
          isActive={activeOption === btn.id}
          size={btn.size}
          onClick={() => {
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
