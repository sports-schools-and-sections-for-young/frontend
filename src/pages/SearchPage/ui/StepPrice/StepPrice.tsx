import React, { FC, useContext, useEffect, useState } from "react";
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

import { usePriceHandler } from "../../../../hooks/usePriceHandler.tsx";
import ResultNotFound from "../../../../components/ResultNotFound/ResultNotFound.tsx";
import { PreloaderSize } from "../../../../components/ui/Preloader/types";
import { StepProps } from "../../types";
import { useResize } from "../../../../hooks/useResize.tsx";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox.tsx";
import { ActionType } from "../../../../components/ResultNotFound/types";

const StepPrice: FC<StepProps> = ({ setStep }) => {
  const { sectionRequest, fetchedSections } = useContext(AppContext);

  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const { isMobileScreen } = useResize();

  const fetchSections = useSectionsFetch(setLoader);
  const { maxPrice, setMaxPrice, setFreeTrial } = usePriceHandler();

  useEffect(() => {
    fetchSections();
  }, []);

  const prices = fetchedSections?.map((section) => section.price);

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>
        Какая <span className={styles.span}>стоимость</span> занятий вам
        подходит?
      </h2>
      {loader ? (
        <Preloader size={PreloaderSize.Large} className={styles.preloader} />
      ) : !fetchedSections.length ? (
        <ResultNotFound
          title="Нет подходящих результатов"
          subtitle="Попробуйте изменить параметры запроса"
          type={ActionType.FIND}
          setStep={setStep}
          step={1}
        />
      ) : (
        <>
          <p className={styles.subtitle}>
            Укажите стоимость одного посещения в рублях
          </p>
          <RangeBar
            currentPrice={maxPrice}
            prices={prices}
            setCurrentPrice={(price: number) => setMaxPrice(price)}
          />
          <div className={styles.optionWrapper}>
            <Input
              type="number"
              labelName="Максимум"
              iconType={InputIcon.RUB}
              iconPosition={InputIconPosition.LEFT}
              className={styles.input}
              value={maxPrice > 0 ? maxPrice : ""}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                setMaxPrice(+evt.target.value)
              }
            />
            {!isMobileScreen ? (
              <Badge
                isActive={sectionRequest.freeTrial}
                onClick={setFreeTrial}
                color={BadgeColor.PRIMARY}
                className={styles.badge}
              >
                <Icon type={IconTypes.COOKIE} color={IconColor.SECONDARY} />
                Бесплатное пробное
                {sectionRequest.freeTrial && (
                  <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
                )}
              </Badge>
            ) : (
              <Checkbox
                title="Бесплатное пробное"
                checked={sectionRequest.freeTrial}
                onChange={setFreeTrial}
              />
            )}
          </div>
          <Button
            onClick={() => navigate("/results")}
            color={ButtonColor.PRIMARY}
            testId={ButtonTestId.FORWARD}
            className={styles.button}
          >
            Показать варианты
            <Icon type={IconTypes.RIGHT_ICON} />
          </Button>
        </>
      )}
    </div>
  );
};

export default StepPrice;
