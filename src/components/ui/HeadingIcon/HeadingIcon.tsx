import { FC } from "react";
import classnames from "classnames";
import styles from "./HeadingIcon.module.scss";
import { HeadingIconProps } from "./types";

const HeadingIcon: FC<HeadingIconProps> = (props) => {
  const { headingLevel, title, view } = props;

  const headingClassName = classnames({
    [styles.titleContainer]: true,
    [styles[view]]: true,
  });

  return (
    <div className={headingClassName} data-testid="headingIcon">
      {headingLevel === "1" ? (
        <h1 className={styles.headingTitle}>{title}</h1>
      ) : (
        <h2 className={styles.headingTitle}>{title}</h2>
      )}
    </div>
  );
};

export default HeadingIcon;
