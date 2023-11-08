import React, { FC } from "react";
import classnames from "classnames";
import { IBarItemProps } from "./BarItemTypes.ts";
import styles from "./BarItem.module.scss";

const BarItem: FC<IBarItemProps> = (props) => {
  const { maxHeight, barChunk, value } = props;

  const maxPrice: number = +Object.keys(barChunk).reduce(
    (a, b) => (barChunk[+a] > barChunk[+b] ? a : b),
    {},
  );
  const height = (barChunk.length / maxHeight) * 100;
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (maxPrice >= value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [value, maxPrice]);

  const itemClassNames = classnames({
    [styles.item]: true,
    [styles.height]: true,
    [styles.itemActive]: isActive,
  });

  return (
    <div className={itemClassNames} style={{ width: height }}>
      {}
    </div>
  );
};

export default BarItem;
