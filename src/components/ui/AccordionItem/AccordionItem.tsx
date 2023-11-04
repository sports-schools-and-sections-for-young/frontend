import React, { FC } from "react";
import classnames from "classnames";
import styles from "./AccordionItem.module.scss";
import { AccordionItemProps } from "./types";

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const { title, description, oneChecked, onClick } = props;
  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  function setChecked(): void {
    setIsChecked(!isChecked);
  }

  const itemClassNames = classnames({
    [styles.item]: true,
    [styles.itemArrowDown]: isChecked,
  });

  const descriotionClassNames = classnames({
    [styles.description]: true,
    [styles.visibleDescription]: isChecked,
  });

  React.useEffect(() => {
    if (oneChecked === title) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [title, oneChecked]);

  return (
    <li className={itemClassNames} onClick={onClick}>
      <label htmlFor="accordionItem">
        <h3 className={styles.title}>{title}</h3>
        <p className={descriotionClassNames}>{description}</p>
      </label>
      <input
        className={styles.hiddenCheckbox}
        type="checkbox"
        checked={isChecked}
        onChange={setChecked}
      />
      <div className={styles.underline} />
    </li>
  );
};

export default AccordionItem;
