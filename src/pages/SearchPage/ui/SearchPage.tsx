import { FC, HTMLAttributes, useState } from "react";
import CloseButton from "../../../components/ui/CloseButton/CloseButton.tsx";
import styles from "./SearchPage.module.scss";
import SearchHeader from "./SearchHeader/SearchHeader.tsx";

interface SearchPageProps extends HTMLAttributes<HTMLElement> {
  initialStep: number;
}

const SearchPage: FC<SearchPageProps> = (props) => {
  const { initialStep, ...rest } = props;

  const [step, setStep] = useState<number>(initialStep);

  return (
    <main className={styles.searchPage} {...rest}>
      <SearchHeader minimal={step === 0}>
        <CloseButton onClick={() => setStep(0)} />
      </SearchHeader>
    </main>
  );
};

export default SearchPage;
