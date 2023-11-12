import React, { FC, useState, useEffect } from "react";
import styles from "./RangeBar.module.scss";
import BarItem from "./BarItem/BarItem";

interface IRangeBarProps {
  currentPrice: number;
  prices: number[];
  setCurrentPrice: (price: number) => void;
}

const RangeBar: FC<IRangeBarProps> = (props) => {
  const { prices, currentPrice, setCurrentPrice } = props;
  const rangeCapacity = 30;
  const maxPrice = Math.max(...prices);

  type groupPrice = {
    range: number;
    prices: number[];
  }[];
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [groupPrices, setGroupPrices] = useState<groupPrice>([
    { prices: [], range: 0 },
  ]);

  const devideArrToChunk = (arrayOfPrices: number[]) => {
    const bars: groupPrice = Array.from({ length: rangeCapacity }, () => {
      return { prices: [], range: 0 };
    });
    const rangeChunk = maxPrice / rangeCapacity;

    let range = +rangeChunk.toFixed(2);
    let index = 0;
    arrayOfPrices.forEach((price) => {
      if (price <= range) {
        bars[index].range = range;
        bars[index].prices.push(price);
      } else {
        while (!(price <= range)) {
          index += 1;
          if (index === rangeCapacity - 1) {
            range = maxPrice;
          } else {
            range = +(rangeChunk * (index + 1)).toFixed(2);
          }
        }
        bars[index].range = range;
        bars[index].prices.push(price);
      }
    });
    return bars;
  };

  const findMaxBarHeight = (arr: groupPrice) => {
    let maxHeight = 0;
    arr.forEach((item) => {
      if (item.prices.length > maxHeight) {
        maxHeight = item.prices.length;
      }
    });
    return maxHeight;
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = e.target.value;
    if (!priceValue) {
      setCurrentPrice(0);
    }
    setCurrentPrice(parseInt(priceValue, 10));
  };

  useEffect(() => {
    const sortedPrices = [...prices].sort((min, max) => min - max);
    const devidedPrices = devideArrToChunk(sortedPrices);
    setGroupPrices(devidedPrices);
    setMaxHeight(findMaxBarHeight(devidedPrices));
  }, []);

  useEffect(() => {
    setProgress((currentPrice / maxPrice) * 100);
  }, [currentPrice, maxPrice]);

  return (
    <label htmlFor="rangeBar" className={styles.rangebar}>
      <ul className={styles.barlist}>
        {groupPrices.map((bar, id) => {
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
