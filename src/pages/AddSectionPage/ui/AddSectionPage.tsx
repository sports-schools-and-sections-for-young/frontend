import React, { FC, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
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
import { createSection, updateSection } from "../../../utils/api";
import Input from "../../../components/ui/Input/Input.tsx";
import ModalSection from "../../../components/ModalSection/ModalSection.tsx";

const defaultSectionRequest = {
  title: "",
  gender: "",
  sport_type: null,
  schedule: [],
  year_from: minAge,
  year_until: maxAge,
  price: 0,
  address: "",
  free_class: false,
};

interface TitleField {
  title: string;
}

const AddSectionPage: FC = () => {
  const [isSportSectionValid, setIsSportSectionValid] = useState(false);
  const [isAboutSectionValid, setIsAboutSectionValid] =
    useState(
      false,
    ); /* About не контролю. Есть дефолт значения. Если юзер вводит не то, я возвращаю в дефолт */
  const [isLocationSectionValid, setIsLocationSectionValid] = useState(false);
  const [isPriceSectionValid, setIsPriceSectionValid] = useState(false);
  const [isAddDaysSectionValid, setIsAddDaysSectionValid] = useState(false);

  const [successModal, setSuccessModal] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [request, setRequest] = useState<AddSectionRequest>(
    defaultSectionRequest,
  );

  const {
    register,
    formState: { errors },
  } = useForm<TitleField>({ mode: "onChange" });

  // useEffect(() => {
  //   if (location.state.forEditing) {
  //     const section = school?.sections.find(
  //       (section) => section.id === location.state.forEditing,
  //     );
  //     if (section) {
  //       setRequest(section);
  //     }
  //   }
  // }, [location.state.forEditing, school?.sections]);

  const [cookies] = useCookies(["token"]);

  const allSectionsValid =
    isSportSectionValid &&
    isAboutSectionValid &&
    isLocationSectionValid &&
    isPriceSectionValid &&
    isAddDaysSectionValid;

  const handleSubmit = async () => {
    if (!location?.state?.forEditing) {
      await createSection(cookies.token, request);
    } else {
      await updateSection(cookies.token, location.state.forEditing, request);
    }
    setSuccessModal(true);
  };

  return (
    <>
      <Header />
      <FavouriteNavigate />
      <main className={styles.addSectionPage}>
        <h2 className={styles.title}>
          {!location?.state?.forEditing
            ? "Добавление секции"
            : "Редактирование секции"}
        </h2>
        <div className={styles.sectionTitleContainer}>
          <h3 className={styles.sectionTitle}>
            Введите <span className={styles.span}>название секции</span>
          </h3>
          <Input
            placeholder="Название секции"
            type="text"
            {...register("title", {
              minLength: {
                value: 5,
                message: "Не менее 5 символов",
              },
              maxLength: {
                value: 255,
                message: "Не более 255 символов",
              },
              required: "Введите название",
              pattern: {
                value:
                  /^[A-ZА-ЯЁ][а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ0-9№"\-\s]*$/,
                message:
                  "Название начинается с маленькой буквы или содержит недопустимый символ",
              },
              onChange: (evt: React.ChangeEvent<HTMLInputElement>) =>
                setRequest({ ...request, title: evt.target.value }),
            })}
            value={request.title}
            hasError={Boolean(errors.title)}
            errorMessage={errors.title?.message}
          />
        </div>
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
            onClick={handleSubmit}
            disabled={allSectionsValid}
          >
            Сохранить
            <Icon type={IconTypes.RIGHT_ICON} />
          </Button>
        </div>
        {successModal && (
          <ModalSection isEditing={location?.state?.isEditing} />
        )}
      </main>
      <MainFooter />
    </>
  );
};

export default AddSectionPage;
