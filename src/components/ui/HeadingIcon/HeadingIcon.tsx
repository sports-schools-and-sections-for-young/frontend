import { FC } from "react";
import classnames from "classnames";
import styles from "./HeadingIcon.module.scss";
import { HeadingIconProps } from "./types";

const HeadingIcon: FC<HeadingIconProps> = (props) => {
  const { className = "", headingLevel, title, view } = props;

  const headingClassName = classnames({
    [styles.titleContainer]: true,
    [styles[view]]: true,
    [className]: true,
  });

  return (
    <div className={headingClassName} data-testid="headingIcon">
      {headingLevel === "2" ? (
        <h2 className={styles.headingTitle}>{title}</h2>
      ) : (
        <h4 className={styles.headingTitle}>{title}</h4>
      )}
    </div>
  );
};

export default HeadingIcon;
