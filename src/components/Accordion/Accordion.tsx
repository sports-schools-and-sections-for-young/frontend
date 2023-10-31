import { FC } from "react";
import styles from "./Accordion.module.scss";
import AccordionItem from "../ui/AccordionItem/AccordionItem.tsx";
import { AccordionProps } from "./types";

const Accordion: FC<AccordionProps> = (props) => {
  const { dataArr } = props;

  return (
    <ul className={styles.container}>
      {dataArr.map((item) => {
        return (
          <AccordionItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
