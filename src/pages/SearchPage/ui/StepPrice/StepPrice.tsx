import { useContext, useEffect, useState } from "react";
import AppContext from "../../../../context/AppContext.ts";
import { searchSections } from "../../../../utils/api";
import styles from "../StepLocation/StepLocation.module.scss";
import RangeBar from "../../../../components/RangeBar/RangeBar.tsx";
import { Section } from "../../../../types";

const StepPrice = () => {
  const {
    sectionRequest,
    setFetchedSections,
    filteredSections,
    setFilteredSections,
  } = useContext(AppContext);

  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    const fetchSections = async () => {
      const sections: Section[] = await searchSections(sectionRequest);
      setFetchedSections(sections);

      if (!filteredSections.length) {
        setFilteredSections(sections);
        setCurrentPrice(Math.max(...sections.map((section) => section.price)));
      }
    };
    fetchSections();
  }, [
    sectionRequest,
    setFetchedSections,
    filteredSections.length,
    setFilteredSections,
  ]);

  const prices = filteredSections?.map((section) => section.price);

  console.log("Prices", prices);

  console.log("currentPrice", currentPrice);

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        Какая <span className={styles.span}>стоимость</span> занятий вам
        подходит?
      </h2>
      <p className={styles.subtitle}>
        Укажите стоимость одного посещения в рублях
      </p>
      <RangeBar
        currentPrice={currentPrice}
        prices={prices}
        setCurrentPrice={setCurrentPrice}
      />
    </div>
  );
};

export default StepPrice;
