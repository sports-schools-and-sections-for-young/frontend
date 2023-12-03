import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../../context/AppContext.ts";
import styles from "./StepPrice.module.scss";
import RangeBar from "../../../../components/RangeBar/RangeBar.tsx";
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
import { useSectionsFetch } from "../../../../hooks/useSectionsFetch.tsx";

const StepPrice = () => {
  const {
    sectionRequest,
    fetchedSections,
    filteredSections,
    setFilteredSections,
    setSectionRequest,
  } = useContext(AppContext);

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const fetchSections = useSectionsFetch(setLoader);

  useEffect(() => {
    fetchSections();
  }, []);

  const prices = fetchedSections?.map((section) => section.price);

  const handleFreeTrial = () => {
    if (!sectionRequest.freeTrial) {
      const sectionsWithTrial = filteredSections.filter(
        (section) =>
          section.free_class && section.price <= sectionRequest.maxPrice,
      );
      setFilteredSections(sectionsWithTrial);
    } else {
      setFilteredSections(
        fetchedSections.filter(
          (section) => section.price <= sectionRequest.maxPrice,
        ),
      );
    }
    setSectionRequest({
      ...sectionRequest,
      freeTrial: !sectionRequest.freeTrial,
    });
  };

  const handlePriceChange = (price: number) => {
    if (sectionRequest.freeTrial) {
      const sectionsUnderPrice = fetchedSections.filter(
        (section) => section.price <= price && section.free_class,
      );
      setFilteredSections(sectionsUnderPrice);
    } else {
      setFilteredSections(
        fetchedSections.filter((section) => section.price <= price),
      );
    }
    setSectionRequest({ ...sectionRequest, maxPrice: price });
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
        <Preloader />
      ) : (
        <RangeBar
          currentPrice={sectionRequest.maxPrice}
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
          value={sectionRequest.maxPrice}
          onChange={(e) => handlePriceChange(+e.target.value)}
        />
        <Badge
          isActive={sectionRequest.freeTrial}
          onClick={handleFreeTrial}
          color={BadgeColor.PRIMARY}
          className={styles.badge}
        >
          <Icon type={IconTypes.COOKIE} color={IconColor.SECONDARY} />
          Бесплатное пробное
          {sectionRequest.freeTrial && (
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          )}
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
