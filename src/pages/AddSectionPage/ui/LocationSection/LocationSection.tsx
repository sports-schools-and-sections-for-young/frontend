import { FC, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { SportSectionProps } from "../../types";
import styles from "./LocationSection.module.scss";
import SearchInput, {
  SearchingItem,
} from "../../../../components/ui/SearchInput/SearchInput.tsx";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import {
  getGeosuggestAddresses,
  parseSchedule,
  parseSport,
} from "../../../../utils/functions";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox.tsx";
import AppContext from "../../../../context/AppContext.ts";
import { SchoolInfo, Section, Sport } from "../../../../types";
import {
  getSchoolInfo,
  getSchoolSections,
  getSports,
} from "../../../../utils/api";

const LocationSection: FC<SportSectionProps> = (props) => {
  const { setRequest, request } = props;

  const { school, setSchool } = useContext(AppContext);

  const [addressList, setAddressList] = useState<SearchingItem[]>([]);

  const [sameAddress, setSameAddress] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const getInfo = async (token: string) => {
      try {
        const sports: Sport[] = await getSports();
        const info: SchoolInfo = await getSchoolInfo(token);
        const sections: Section[] = await getSchoolSections(token);
        const parsedSections = sections.map((s: Section) => {
          return {
            ...s,
            sport_type: parseSport(+s.sport_type, sports),
            schedule: parseSchedule(s.schedule),
          };
        });
        setSchool({
          info,
          sections: parsedSections,
        });
      } catch (e) {
        if (e instanceof Response && e.status === 401) {
          removeCookie("token", { path: "/" });
          removeCookie("token", { path: "/profile" });
          setSchool(null);
        }
      }
    };
    const { token } = cookies;

    if (token && !school) {
      getInfo(token);
    }
  }, [school]);

  const handleChange = async (address: string) => {
    setRequest({ ...request, address });
    const geosuggestAddresses = await getGeosuggestAddresses(address);
    setAddressList(geosuggestAddresses);
  };

  const handleItemClick = async (address: string) => {
    setRequest({ ...request, address });
  };

  const handleCheckbox = () => {
    console.log(school?.info.address);
    if (!sameAddress && school?.info.address) {
      setRequest({ ...request, address: school.info.address });
    }
    setSameAddress(!sameAddress);
  };

  return (
    <section className={styles.step}>
      <h3 className={styles.title}>
        5. Введите&nbsp;
        <span className={styles.span}>адрес</span> проведения занятий
      </h3>
      <p className={styles.subtitle}>
        Введите адрес, где будут проходить занятия секции
      </p>
      <div className={styles.controlWrapper}>
        <SearchInput
          labelName="Адрес"
          placeholder="Поиск"
          type="text"
          hasFilter={false}
          searchingList={addressList}
          value={request.address}
          iconType={InputIcon.MAGNIGY}
          iconPosition={InputIconPosition.RIGHT}
          onChange={(e) => handleChange(e.target.value)}
          itemClickHandler={(e: SearchingItem) => handleItemClick(e.title)}
          disabled={sameAddress}
        />
      </div>
      <Checkbox
        title="Адрес совпадает с адресом школы"
        className={styles.checkbox}
        checked={sameAddress}
        onChange={handleCheckbox}
      />
    </section>
  );
};

export default LocationSection;
