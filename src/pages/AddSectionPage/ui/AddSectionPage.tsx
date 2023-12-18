import { FC, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./AddSectionPage.module.scss";
import Header from "../../../components/ui/Header/Header";
import FavouriteNavigate from "../../FavouritePage/ui/FavouriteNavigate/FavouriteNavigate";
import MainFooter from "../../../components/MainFooter/MainFooter.tsx";
import SportSection from "./SportSection/SportSection.tsx";
import AboutSection from "./AboutSection/AboutSection.tsx";
import AddDaysSection from "./AddDaysSection/AddDaysSection.tsx";
import PriceSection from "./PriceSection/PriceSection.tsx";
import LocationSection from "./LocationSection/LocationSection.tsx";
import Button from "../../../components/ui/Button/Button.tsx";
import { ButtonColor, ButtonTestId } from "../../../components/ui/Button/types";
import Icon from "../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../components/ui/Icon/types";
import { maxAge, minAge } from "../../../utils/variables.ts";
import { AddSectionRequest } from "../types";

const defaultSectionRequest = {
  title: "",
  gender: "",
  sport_type: null,
  schedule: [],
  year_from: minAge,
  year_until: maxAge,
  price: 0,
  address: "",
};

const AddSectionPage: FC = () => {
  const [isSportSectionValid, setIsSportSectionValid] = useState(false);
  const [isAboutSectionValid, setIsAboutSectionValid] =
    useState(
      false,
    ); /* About не контролю. Есть дефолт значения. Если юзер вводит не то, я возвращаю в дефолт */
  const [isLocationSectionValid, setIsLocationSectionValid] = useState(false);
  const [isPriceSectionValid, setIsPriceSectionValid] = useState(false);
  const [isAddDaysSectionValid, setIsAddDaysSectionValid] = useState(false);

  const [request, setRequest] = useState<AddSectionRequest>(
    defaultSectionRequest,
  );

  const allSectionsValid =
    isSportSectionValid &&
    isAboutSectionValid &&
    isLocationSectionValid &&
    isPriceSectionValid &&
    isAddDaysSectionValid;

  return (
    <>
      <Header />
      <FavouriteNavigate />
      <main className={styles.addSectionPage}>
        <h2 className={styles.title}>Добавление секции</h2>

        <SportSection
          setValid={setIsSportSectionValid}
          request={request}
          setRequest={setRequest}
        />
        <AboutSection
          setValid={setIsAboutSectionValid}
          request={request}
          setRequest={setRequest}
        />
        <AddDaysSection
          setValid={setIsAddDaysSectionValid}
          request={request}
          setRequest={setRequest}
        />
        <PriceSection
          setValid={setIsPriceSectionValid}
          request={request}
          setRequest={setRequest}
        />
        <LocationSection
          setValid={setIsLocationSectionValid}
          request={request}
          setRequest={setRequest}
        />
        <div className={styles.buttonContainer}>
          <Button
            testId={ButtonTestId.FORWARD}
            color={ButtonColor.PRIMARY}
            withMinWidth
            type="button"
            onClick={() => {}}
            disabled={!allSectionsValid}
          >
            Сохранить
            <Icon type={IconTypes.RIGHT_ICON} />
          </Button>
        </div>
      </main>
      <MainFooter />
    </>
  );
};

export default AddSectionPage;
