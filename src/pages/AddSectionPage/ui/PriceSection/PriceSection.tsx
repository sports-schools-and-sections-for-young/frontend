import React, {FC, useContext } from "react";
import AppContext from "../../../../context/AppContext.ts";
import styles from "./PriceSection.module.scss";
import { SportSectionProps  } from "../../types";

import Input from "../../../../components/ui/Input/Input.tsx";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import { usePriceHandler } from "../../../../hooks/usePriceHandler.tsx";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";

const PriceSection: FC<SportSectionProps> = () => {
  const { sectionRequest } = useContext(AppContext);
  const { maxPrice, setMaxPrice, setFreeTrial } = usePriceHandler();

  return (
    <section className={styles.step}>
      <h3 className={styles.title}>
        4. Введите <span className={styles.span}>стоимость</span>
      </h3>
      <div className={styles.optionWrapper}>
        <Input
          type="number"
          iconType={InputIcon.RUB}
          iconPosition={InputIconPosition.LEFT}
          className={styles.input}
          value={maxPrice}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setMaxPrice(+evt.target.value)
          }
        />
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
      </div>
    </section>
  );
};

export default PriceSection;
