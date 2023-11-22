import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../context/AppContext.ts";
import { searchSections } from "../../../../utils/api";
import styles from "./StepPrice.module.scss";
import RangeBar from "../../../../components/RangeBar/RangeBar.tsx";
import { Section } from "../../../../types";
import Input from "../../../../components/ui/Input/Input.tsx";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Preloader from "../../../../components/ui/Preloader/Preloader.tsx";

const StepPrice = () => {
  const {
    sectionRequest,
    fetchedSections,
    setFetchedSections,
    filteredSections,
    setFilteredSections,
  } = useContext(AppContext);

  const [currentPrice, setCurrentPrice] = useState(0);
  const [free, setFree] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSections = async () => {
      setLoader(true);
      const sections: Section[] = await searchSections(sectionRequest);
      setFetchedSections(sections);

      if (!filteredSections.length) {
        setFilteredSections(sections);
      }

      setCurrentPrice(Math.max(...sections.map((section) => section.price)));

      setLoader(false);
    };
    fetchSections();
  }, [sectionRequest, setFetchedSections, setFilteredSections]);

  const prices = fetchedSections?.map((section) => section.price);

  const handlePriceChange = (price: number) => {
    setCurrentPrice(price);
    const sectionsUnderPrice = fetchedSections.filter(
      (section) => section.price <= price,
    );
    setFilteredSections(sectionsUnderPrice);
  };

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        Какая <span className={styles.span}>стоимость</span> занятий вам
        подходит?
      </h2>
      <p className={styles.subtitle}>
        Укажите стоимость одного посещения в рублях
      </p>
      {loader ? (
        <Preloader className={styles.preloader} />
      ) : (
        <RangeBar
          currentPrice={currentPrice}
          prices={prices}
          setCurrentPrice={handlePriceChange}
        />
      )}
      <div className={styles.optionWrapper}>
        <Input
          type="number"
          iconType={InputIcon.RUB}
          iconPosition={InputIconPosition.LEFT}
          className={styles.input}
          value={currentPrice}
          onChange={(e) => handlePriceChange(+e.target.value)}
        />
        <Badge
          isActive={free}
          onClick={() => setFree(!free)}
          color={BadgeColor.PRIMARY}
          className={styles.badge}
        >
          <Icon type={IconTypes.COOKIE} color={IconColor.SECONDARY} />
          Бесплатное пробное
          {free && <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />}
        </Badge>
      </div>
      <Button
        onClick={() => navigate("/results")}
        color={ButtonColor.PRIMARY}
        testId={ButtonTestId.FORWARD}
      >
        Показать варианты
        <Icon type={IconTypes.RIGHT_ICON} />
      </Button>
    </div>
  );
};

export default StepPrice;
