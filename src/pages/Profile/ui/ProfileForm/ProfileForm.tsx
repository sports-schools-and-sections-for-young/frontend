import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import styles from "./ProfileForm.module.scss";
import Gear from "../../../../assets/images/icons/Gear.svg?react";
import Input from "../../../../components/ui/Input/Input.tsx";
import AppContext from "../../../../context/AppContext.ts";
import { formatPhoneInput } from "../../../../utils/functions";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../../components/ui/Icon/types";
import { CreateSchool, UpdateSchool } from "../../../../utils/api/types";
import {
  createSchoolInfo,
  deleteAccount,
  updateSchoolInfo,
} from "../../../../utils/api";
import { SchoolInfo } from "../../../../types";
import Modal from "../../../../components/Modal/Modal.tsx";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";

type ProfileFormModals = "deletion" | "logout" | null;

const ProfileForm = () => {
  const { school, setSchool } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  const [modal, setModal] = useState<ProfileFormModals>(null);

  const [cookies] = useCookies(["token"]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<UpdateSchool>({ mode: "onChange" });

  useEffect(() => {
    setValue("title", school?.info.title ? school.info.title : "");
    setValue("address", school?.info.address ? school.info.address : "");
    setValue("site", school?.info.site ? school.info.site : "");
    setValue("email", school?.info.email ? school.info.email : "");
    setValue("phone", school?.info.phone ? school.info.phone : "");
  }, [
    school?.info.title,
    school?.info.address,
    school?.info.site,
    school?.info.email,
    school?.info.phone,
    setValue,
  ]);

  const onSubmit: SubmitHandler<UpdateSchool> = async (
    body: CreateSchool | UpdateSchool,
  ) => {
    try {
      if (!school) {
        const newInfo: SchoolInfo = await createSchoolInfo(
          cookies.token,
          body as CreateSchool,
        );
        setSchool({ sections: [], info: newInfo });
        setIsEditing(false);
      } else {
        const newInfo: SchoolInfo = await updateSchoolInfo(
          cookies.token,
          body as UpdateSchool,
        );
        setSchool({
          sections: school?.sections ? school.sections : [],
          info: newInfo,
        });
        setIsEditing(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeletion = async () => {
    const deletion = await deleteAccount(
      school?.info.id as number,
      cookies.token,
    );
    console.log(deletion);
  };

  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>Профиль</h2>
      <div className={styles.formContainer}>
        <div className={styles.optionsContainer}>
          <p className={styles.options}>Настройки профиля</p>
          {!isEditing && (
            <button
              className={styles.editButton}
              type="button"
              onClick={() => setIsEditing(true)}
            >
              <span className={styles.edit}>Редактировать</span> <Gear />
            </button>
          )}
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            labelName="Название школы"
            disabled={!isEditing}
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
                value: /^[а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]*$/imu,
                message: "Поле может содержать только буквы, пробелы и дефисы",
              },
            })}
            hasError={Boolean(errors.title)}
            errorMessage={errors.title?.message}
          />
          <Input
            labelName="Адрес школы"
            disabled={!isEditing}
            type="text"
            {...register("address", {
              minLength: {
                value: 5,
                message: "Не менее 5 символов",
              },
              required: "Введите адрес",
              pattern: {
                value: /^[0-9а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ.,\-\s]*$/imu,
                message:
                  "Поле может содержать только буквы, цифры, пробелы, дефисы, точки и запятые",
              },
            })}
            hasError={Boolean(errors.address)}
            errorMessage={errors.address?.message}
          />
          <Input
            labelName="Номер телефона"
            disabled={!isEditing}
            type="text"
            {...register("phone", {
              required: "Введите номер телефона",
              onChange: (e) => formatPhoneInput(e),
            })}
            hasError={Boolean(errors.phone)}
            errorMessage={errors.phone?.message}
          />
          <Input
            labelName="Сайт организации"
            disabled={!isEditing}
            type="text"
            {...register("site", {
              pattern: {
                value:
                  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
                message: "Введите адрес сайта в формате http://адрес",
              },
            })}
            hasError={Boolean(errors.site)}
            errorMessage={errors.site?.message}
          />
          <Input
            labelName="Электронная почта"
            disabled={!isEditing}
            type="text"
            {...register("email", {
              required: "Введите E-mail",
              pattern: {
                value: /[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\.[a-z]{2,}/,
                message: "Введите корректное значение e-mail",
              },
            })}
            hasError={Boolean(errors.email)}
            errorMessage={errors.email?.message}
          />
          {isEditing && (
            <Button
              type="submit"
              className={styles.submitButton}
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.OTHER}
            >
              Сохранить <Icon type={IconTypes.RIGHT_ICON} />
            </Button>
          )}
        </form>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => setModal("deletion")}
        >
          Удалить профиль
        </button>
        {modal === "deletion" && (
          <Modal closeModal={() => setModal(null)}>
            <ConfirmModal closeModal={() => setModal(null)}>
              <p className={styles.titleModal}>
                Вы уверены что хотите{" "}
                <span className={styles.span}>удалить аккаунт</span> с
                платформы?
              </p>
              <p className={styles.warning}>
                Все данные организации, расписание, виды спорта, стоимость будут
                удалены без возможности восстановления.
              </p>
              <div className={styles.buttonContainer}>
                <Button
                  onClick={handleDeletion}
                  color={ButtonColor.WARNING}
                  testId={ButtonTestId.OTHER}
                >
                  Удалить профиль
                </Button>
                <Button
                  onClick={() => setModal(null)}
                  color={ButtonColor.SECONDARY}
                  testId={ButtonTestId.BACK}
                >
                  Вернуться назад
                </Button>
              </div>
            </ConfirmModal>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
