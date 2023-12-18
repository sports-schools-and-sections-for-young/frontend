import { FC, HTMLAttributes, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchPage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader.tsx";
import StepInitial from "./StepInitial/StepInitial.tsx";
import StepSports from "./StepSports/StepSports.tsx";
import StepAbout from "./StepAbout/StepAbout.tsx";
import StepLocation from "./StepLocation/StepLocation.tsx";
import StepPrice from "./StepPrice/StepPrice.tsx";

interface SearchPageProps extends HTMLAttributes<HTMLElement> {
  initialStep: number;
}

const SearchPage: FC<SearchPageProps> = (props) => {
  const { initialStep, ...rest } = props;

  let externalStep: number | null = null;

  const { state } = useLocation();
  if (state && state.step) {
    externalStep = state.step;
  }

  const [step, setStep] = useState<number>(externalStep || initialStep);

  const steps = [
    <StepInitial setStep={setStep} step={step} />,
    <StepSports setStep={setStep} step={step} />,
    <StepAbout setStep={setStep} step={step} />,
    <StepLocation setStep={setStep} step={step} />,
    <StepPrice setStep={setStep} step={step} />,
  ];

  return (
    <main className={styles.searchPage} {...rest}>
      <SearchHeader minimal={step === 0} step={step} setStep={setStep} />
      {steps[step]}
    </main>
  );
};

export default SearchPage;
