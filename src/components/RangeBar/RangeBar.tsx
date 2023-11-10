import React, { FC, useState, useEffect } from "react";
import { IRangeBarProps } from "./rangeBarTypes";
import styles from "./RangeBar.module.scss";

import BarItem from "./BarItem/BarItem";

const RangeBar: FC<IRangeBarProps> = (props) => {
  const { prices, currentPrice, setCurrentPrice } = props;
  const rangeCapacity = 30;
  const maxPrice = Math.max(...prices);
  const rangeChunk = maxPrice / rangeCapacity;
  const sortedPrices = [...prices].sort((min, max) => min - max);
  let maxHeight = 0;

  const [progress, setProgress] = useState<number>(0);

  type groupPrice = {
    range: number;
    prices: number[];
  }[];

  const devideArrToChunk = (arrayOfPrices: number[]) => {
    const bars: groupPrice = Array.from({ length: rangeCapacity }, () => {
      return { prices: [], range: 0 };
    });
    let range = rangeChunk;
    let index = 0;
    arrayOfPrices.forEach((price) => {
      if (price <= range) {
        bars[index].range = range;
        bars[index].prices.push(price);
      } else {
        while (!(price <= range)) {
          index += 1;
          range = rangeChunk * (index + 1);
        }
        bars[index].range = range;
        bars[index].prices.push(price);
      }
    });
    bars.forEach((item) => {
      if (item.prices.length > maxHeight) {
        maxHeight = item.prices.length;
      }
    });
    return bars;
  };

  const graphPrice = devideArrToChunk(sortedPrices);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = e.target.value;
    if (!priceValue) {
      setCurrentPrice(0);
    }
    setCurrentPrice(parseInt(priceValue, 10));
  };

  useEffect(() => {
    setProgress((currentPrice / maxPrice) * 100);
  }, [currentPrice, maxPrice]);

  return (
    <label htmlFor="rangeBar" className={styles.rangebar}>
      <ul className={styles.barlist}>
        {graphPrice.map((bar, id) => {
          return (
            <BarItem
              // eslint-disable-next-line react/no-array-index-key
              key={id}
              barChunk={bar}
              currentPrice={currentPrice}
              maxHeight={maxHeight}
            />
          );
        })}
      </ul>
      <input
        className={`${styles.input}`}
        style={{ backgroundSize: `${progress}% 100%` }}
        id="rangeBar"
        type="range"
        min="0"
        max={maxPrice}
        value={currentPrice}
        onChange={handleChangePrice}
        step="1"
      />
    </label>
  );
};

export default RangeBar;
