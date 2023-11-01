import { FC } from "react";
import styles from "./AccordionItem.module.scss";
import { AccordionItemProps } from "./types";

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { title, description } = props;

  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.underline} />
    </li>
  );
};

export default AccordionItem;
