import React, { FC } from "react";
import styles from "./PriceSection.module.scss";
import { SportSectionProps } from "../../types";
import Input from "../../../../components/ui/Input/Input.tsx";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";

const PriceSection: FC<SportSectionProps> = (props) => {
  const { setRequest, request } = props;

  return (
    <section className={styles.step}>
      <h3 className={styles.title}>
        4. Введите <span className={styles.span}>стоимость</span>
      </h3>
      <div className={styles.optionWrapper}>
        <Input
          type="number"
          labelName="Цена"
          iconType={InputIcon.RUB}
          iconPosition={InputIconPosition.LEFT}
          className={styles.input}
          value={request.price > 0 ? request.price : ""}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setRequest({ ...request, price: +evt.target.value })
          }
        />
        <Badge
          isActive={request.free_class}
          onClick={() =>
            setRequest({ ...request, free_class: !request.free_class })
          }
          color={BadgeColor.PRIMARY}
          className={styles.badge}
        >
          <Icon type={IconTypes.COOKIE} color={IconColor.SECONDARY} />
          Бесплатное пробное
          {request.free_class && (
            <Icon type={IconTypes.CROSS} color={IconColor.SECONDARY} />
          )}
        </Badge>
      </div>
    </section>
  );
};

export default PriceSection;
