import React, { FC, useEffect } from "react";
import styles from "./Pagination.module.scss";
import Button from "../Button/Button";
import { ButtonColor, ButtonTestId } from "../Button/types";
import { Section } from "../../../types";

interface PaginationPops<T> {
  value: number;
  list: T;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PaginationPops<Section[]>> = (props) => {
  const { list, setValue, value } = props;
  const moreStep = 6;

  const calculateListLength = () => {
    return list.length >= moreStep ? moreStep : list.length;
  };

  useEffect(() => {
    setValue(calculateListLength);
  }, []);

  const showMore = () => {
    setValue((q) => (list.length >= q + moreStep ? q + moreStep : list.length));
  };
  return (
    <div className={styles.more}>
      <Button
        testId={ButtonTestId.FORWARD}
        color={ButtonColor.PRIMARY}
        withMinWidth
        type="button"
        onClick={showMore}
      >
        Загрузить еще
      </Button>
      <span className={styles.moreCount}>
        {value} из {list.length}
      </span>
    </div>
  );
};
export default Pagination;
