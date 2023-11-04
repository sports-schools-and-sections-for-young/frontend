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
      {headingLevel === "2" ? <h2>{title}</h2> : <h3>{title}</h3>}
    </div>
  );
};

export default HeadingIcon;
