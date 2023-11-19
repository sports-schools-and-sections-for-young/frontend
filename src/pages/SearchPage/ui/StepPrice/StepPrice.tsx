import { useContext, useEffect } from "react";
import AppContext from "../../../../context/AppContext.ts";
import { searchSections } from "../../../../utils/api";
import styles from "../StepLocation/StepLocation.module.scss";

const StepPrice = () => {
  const { sectionRequest } = useContext(AppContext);

  useEffect(() => {
    const fetchSections = async () => {
      const sections = await searchSections(sectionRequest);
      console.log(sections);
    };
    fetchSections();
  });

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        Какая <span className={styles.span}>стоимость</span> занятий вам
        подходит?
      </h2>
      <p className={styles.subtitle}>
        Укажите стоимость одного посещения в рублях
      </p>
    </div>
  );
};

export default StepPrice;
