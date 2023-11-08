import React, { FC } from "react";
import { IRangeBarProps } from "./rangeBarTypes";
import styles from "./RangeBar.module.scss";
import BarItem from "./BarItem/BarItem";

const RangeBar: FC<IRangeBarProps> = (props) => {
  const { prices, value, setValue } = props;
  const step = 12;
  const maxPrice = Math.max(...prices);
  const rangeChunk = maxPrice / step;
  const sortedPrices = [...prices].sort((min, max) => min - max);

  const devideArrToChunk = (arrayOfPrices: number[]) => {
    const bars: object[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
    let range = rangeChunk;
    let index = 0;

    arrayOfPrices.forEach((price) => {
      if (price <= range) {
        bars[index].push({ [`${range}`]: price });
      } else {
        while (!(price <= range)) {
          index += 1;
          range = rangeChunk * (index + 1);
        }
        bars[index].push({ [`${range}`]: price });
      }
    });
    return bars;
  };

  const [graphPrice, setGraphPrice] = React.useState<object[][]>([[{}]]);

  React.useEffect(() => {
    setGraphPrice(devideArrToChunk(sortedPrices));
  }, []);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const priceValue = e.target.value;
    if (!priceValue) {
      setValue(0);
    }
    setValue(parseInt(priceValue, 10));
  };

  return (
    <label htmlFor="rangeBar" className={styles.rangebar}>
      <ul className={styles.barlist}>
        {graphPrice.map((bar) => {
          return (
            <BarItem
              key={Math.floor(Math.random() * 10000)}
              barChunk={bar}
              value={value}
              maxHeight={10}
            />
          );
        })}
      </ul>
      <input
        className={styles.input}
        id="rangeBar"
        type="range"
        min="0"
        max={maxPrice}
        value={value}
        onChange={handleChangePrice}
        step={step}
      />
    </label>
  );
};

export default RangeBar;
