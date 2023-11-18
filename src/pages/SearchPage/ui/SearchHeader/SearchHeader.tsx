import { FC, HTMLAttributes } from "react";
import classnames from "classnames";
import styles from "./SearchHeader.module.scss";

interface SearchHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  minimal?: boolean;
}

const SearchHeader: FC<SearchHeaderProps> = (props) => {
  const { minimal = false, children, ...rest } = props;

  const headerClass = classnames({
    [styles.header]: true,
    [styles.full]: !minimal,
    [styles.minimal]: minimal,
  });

  return (
    <header className={headerClass} {...rest}>
      {children}
    </header>
  );
};

export default SearchHeader;
