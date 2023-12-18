import { FC, useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { SportSectionProps } from "../../types";
import styles from "./LocationSection.module.scss";
import AppContext from "../../../../context/AppContext.ts";
import SearchInput, {
  SearchingItem,
} from "../../../../components/ui/SearchInput/SearchInput.tsx";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import {
  getCoordinates,
  getGeosuggestAddresses,
} from "../../../../utils/functions";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox.tsx";

const LocationSection: FC<SportSectionProps> = () => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  const [searchingAddress, setSearchingAddress] = useState("");
  const debounced = useDebouncedCallback(async (value: string) => {
    const newCoords = await getCoordinates(value);
    setSectionRequest({ ...sectionRequest, location: newCoords });
  }, 3000);
  const [addressList, setAddressList] = useState<SearchingItem[]>([]);

  const handleChange = async (value: string) => {
    setSearchingAddress(value);
    if (value) {
      debounced(value);
    } else {
      debounced.cancel();
    }
    const geosuggestAddresses = await getGeosuggestAddresses(value);
    setAddressList(geosuggestAddresses);
  };

  const handleItemClick = async (address: string) => {
    const newCoords = await getCoordinates(address);
    setSectionRequest({ ...sectionRequest, location: newCoords });
    debounced.cancel();
    setSearchingAddress(address);
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
          value={searchingAddress}
          iconType={InputIcon.MAGNIGY}
          iconPosition={InputIconPosition.RIGHT}
          onChange={(e) => handleChange(e.target.value)}
          itemClickHandler={(e: SearchingItem) => handleItemClick(e.title)}
        />
      </div>
      <Checkbox
        title="Адрес совпадает с адресом школы"
        className={styles.checkbox}
      />
    </section>
  );
};

export default LocationSection;
