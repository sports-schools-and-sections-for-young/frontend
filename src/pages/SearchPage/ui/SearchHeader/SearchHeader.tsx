import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import styles from "./SearchHeader.module.scss";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar.tsx";
import CloseButton from "../../../../components/ui/CloseButton/CloseButton.tsx";
import logo from "../../../../assets/images/Logo.png";
import { useResize } from "../../../../hooks/useResize.tsx";
import ButtonBackMobile from "../../../../components/ui/ButtonBackMobile/ButtonBackMobile.tsx";

interface SearchHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  minimal?: boolean;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

const SearchHeader: FC<SearchHeaderProps> = (props) => {
  const { minimal = false, step, setStep, ...rest } = props;

  const { isMobileScreen } = useResize();

  const navigate = useNavigate();

  const firstLineClass = classnames({
    [styles.firstLine]: true,
    [styles.full]: !minimal,
    [styles.minimal]: minimal,
  });

  return (
    <header className={styles.header} {...rest}>
      <div className={firstLineClass}>
        {!minimal && (
          <>
            {isMobileScreen ? (
              <ButtonBackMobile
                onClick={() => {
                  navigate("/search", { state: { step: step - 1 } });
                  setStep(step - 1);
                }}
              />
            ) : (
              <Button
                onClick={() => {
                  navigate("/search", { state: { step: step - 1 } });
                  setStep(step - 1);
                }}
                color={ButtonColor.SECONDARY}
                testId={ButtonTestId.BACK}
              >
                <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
                Назад
              </Button>
            )}
            {isMobileScreen ? (
              <img className={styles.logo} src={logo} alt="Логотип Спортхаб." />
            ) : (
              <ProgressBar currentStep={step} setStep={setStep} />
            )}
          </>
        )}
        <CloseButton className={styles.close} onClick={() => navigate("/")} />
      </div>
      {!minimal && (
        <div className={styles.secondLine}>
          {!isMobileScreen ? (
            <img className={styles.logo} src={logo} alt="Логотип Спортхаб." />
          ) : (
            <ProgressBar currentStep={step} setStep={setStep} />
          )}
        </div>
      )}
    </header>
  );
};

export default SearchHeader;
