import React, { FC } from "react";
import styles from "./Accordion.module.scss";
import AccordionItem from "../ui/AccordionItem/AccordionItem.tsx";
import { AccordionProps } from "./types";

const Accordion: FC<AccordionProps> = (props) => {
  const { accordionArr } = props;
  const [oneChecked, setOneChecked] = React.useState<string | null>(null);

  return (
    <ul className={styles.container}>
      {accordionArr.map((item) => {
        return (
          <AccordionItem
            key={Math.floor(Math.random() * 10000)}
            title={item.title}
            description={item.description}
            oneChecked={oneChecked}
            onClick={() => setOneChecked(item.title)}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
