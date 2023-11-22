import { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./ResultHeader.module.scss";

interface ResultHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  showMap?: boolean;
}

const ResultHeader: FC<ResultHeaderProps> = (props) => {
  const { children, ...rest } = props;

  const headerClass = classnames({
    [styles.header]: true,
  });

  return (
    <header className={headerClass} {...rest}>
      {children}
    </header>
  );
};

export default ResultHeader;
