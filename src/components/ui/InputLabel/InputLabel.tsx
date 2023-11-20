import { FC, LabelHTMLAttributes } from "react";
import styles from "./InputLabel.module.scss";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  labelId: string;
}

const InputLabel: FC<LabelProps> = (props) => {
  const { labelId, children, ...rest } = props;

  return (
    <label className={styles.label} htmlFor={labelId} {...rest}>
      {children}
    </label>
  );
};

export default InputLabel;
