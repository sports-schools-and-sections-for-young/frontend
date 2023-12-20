import { SubmitHandler, useForm } from "react-hook-form";
import { Dispatch, FC, SetStateAction, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import styles from "./EditInfoForm.module.scss";
import Input from "../../../../components/ui/Input/Input.tsx";
import { formatPhoneInput } from "../../../../utils/functions";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconTypes } from "../../../../components/ui/Icon/types";
import { CreateSchool, UpdateSchool } from "../../../../utils/api/types";
import AppContext from "../../../../context/AppContext.ts";
import { SchoolInfo } from "../../../../types";
import { createSchoolInfo, updateSchoolInfo } from "../../../../utils/api";
import { useResize } from "../../../../hooks/useResize.tsx";

export interface EditFormProps {
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

const EditInfoForm: FC<EditFormProps> = ({ isEditing, setIsEditing }) => {
  const { school, setSchool } = useContext(AppContext);

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

  const { isMobileScreen } = useResize();

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
        setIsEditing(isMobileScreen);
      } else {
        const newInfo: SchoolInfo = await updateSchoolInfo(
          cookies.token,
          body as UpdateSchool,
        );
        setSchool({
          sections: school?.sections ? school.sections : [],
          info: newInfo,
        });
        setIsEditing(isMobileScreen);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
            value: /^[A-ZА-ЯЁ][а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ0-9№"\-\s]*$/,
            message:
              "Название начинается с маленькой буквы или содержит недопустимый символ",
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
            value: /^[0-9а-яА-Яa-zA-ZЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ.,/\-\s]*$/imu,
            message:
              "Поле может содержать только буквы, цифры, пробелы, дефисы, слэш, точки и запятые",
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
          minLength: {
            value: 15,
            message: "Не менее 10 цифр",
          },
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
              /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-zA-Z0-9А-ЯЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ-]{2,}(\.[a-zA-Z0-9А-ЯЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ-]{2,})(\.[a-zA-Z0-9А-ЯЁёәіңғүұқөһӘІҢҒҮҰҚӨҺ]{2,})?/,
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
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
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
  );
};

export default EditInfoForm;
