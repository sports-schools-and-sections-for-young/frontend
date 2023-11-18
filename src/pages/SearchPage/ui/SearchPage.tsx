import { FC, HTMLAttributes, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../../../components/ui/CloseButton/CloseButton.tsx";
import styles from "./SearchPage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader.tsx";
import StepInitial from "./StepInitial/StepInitial.tsx";
import Button from "../../../components/ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../../components/ui/Button/types";
import Icon from "../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../components/ui/Icon/types";
import StepSports from "./StepSports/StepSports.tsx";
import StepAbout from "./StepAbout/StepAbout.tsx";
import StepLocation from "./StepLocation/StepLocation.tsx";

interface SearchPageProps extends HTMLAttributes<HTMLElement> {
  initialStep: number;
}

const SearchPage: FC<SearchPageProps> = (props) => {
  const { initialStep, ...rest } = props;

  const navigate = useNavigate();

  const [step, setStep] = useState<number>(initialStep);

  const steps = [
    <StepInitial setStep={setStep} step={step} />,
    <StepSports setStep={setStep} step={step} />,
    <StepAbout setStep={setStep} step={step} />,
    <StepLocation />,
  ];

  return (
    <main className={styles.searchPage} {...rest}>
      <SearchHeader minimal={step === 0}>
        {step !== 0 && (
          <>
            <Button
              onClick={() => setStep(step - 1)}
              color={ButtonColor.SECONDARY}
              testId={ButtonTestId.BACK}
            >
              <Icon color={IconColor.SECONDARY} type={IconTypes.LEFT_ICON} />
              Назад
            </Button>
            <div>Тут будет прогресс бар</div>
          </>
        )}
        <CloseButton onClick={() => navigate("/")} />
      </SearchHeader>
      {steps[step]}
    </main>
  );
};

export default SearchPage;
