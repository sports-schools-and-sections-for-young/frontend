import React, { FC } from "react";
import classnames from "classnames";
import styles from "./BarItem.module.scss";

interface IBarItemProps {
  barChunk: {
    range: number;
    prices: number[];
  };
  currentPrice: number;
  maxHeight: number;
}

const BarItem: FC<IBarItemProps> = (props) => {
  const { maxHeight, barChunk, currentPrice } = props;
  const barHeight = (barChunk.prices.length / maxHeight) * 100;
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    if (barChunk.range <= currentPrice) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPrice, barChunk.range]);

  const itemClassNames = classnames({
    [styles.item]: true,
    [styles.height]: true,
    [styles.itemActive]: isActive,
  });

  return (
    <div className={itemClassNames} style={{ height: `${barHeight}%` }}>
      {}
    </div>
  );
};

export default BarItem;
