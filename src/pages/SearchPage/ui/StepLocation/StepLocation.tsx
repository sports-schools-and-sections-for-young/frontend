import { FC, useContext, useMemo, useState } from "react";
import Map from "../../../../components/Map/Map.tsx";
import { StepProps } from "../../types";
import styles from "./StepLocation.module.scss";
import LocationPlacemark from "../../../../components/Map/LocationPlacemark/LocationPlacemark.tsx";
import AppContext from "../../../../context/AppContext.ts";
import MapContext from "../../../../context/MapContext.ts";
import CheckboxPanel from "../../../../components/ui/CheckboxPanel/CheckboxPanel.tsx";
import { Btn } from "../../../../components/ui/CheckboxPanel/types";
import { CheckboxBtnSize } from "../../../../components/ui/CheckboxBtn/types";
import SearchInput, {
  SearchingItem,
} from "../../../../components/ui/SearchInput/SearchInput.tsx";
import { GEOSUGGEST_KEY } from "../../../../utils/variables.ts";
import Badge from "../../../../components/ui/Badge/Badge.tsx";
import { BadgeColor } from "../../../../components/ui/Badge/types";
import Icon from "../../../../components/ui/Icon/Icon.tsx";
import { IconColor, IconTypes } from "../../../../components/ui/Icon/types";
import {
  InputIcon,
  InputIconPosition,
} from "../../../../components/ui/InputField/types";
import Button from "../../../../components/ui/Button/Button.tsx";
import {
  ButtonColor,
  ButtonTestId,
} from "../../../../components/ui/Button/types";

export interface YandexAnswer {
  suggest_reqid: string;
  results: {
    address: {
      component: {
        name: string;
        kind: string[];
      }[];
      formatted_address: string;
    };
    distance: {
      value: number;
      text: string;
    };
    tags: string[];
    title: {
      hl: { begin: number; end: number }[];
      text: string;
    };
  }[];
}

const StepLocation: FC<StepProps> = ({ step, setStep }) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  const [map, setMap] = useState();

  const [searchingAddress, setSearchingAddress] = useState("");

  const [addressList, setAddressList] = useState<SearchingItem[]>([]);

  const getGeoLocation = () => {
    if (map) {
      // @ts-ignore
      return map.geolocation
        .get({ provider: "yandex", mapStateAutoApply: true })
        .then((result: { geoObjects: { position: [number, number] } }) => {
          setSectionRequest({
            ...sectionRequest,
            location: result.geoObjects.position,
          });
        });
    }
    return [];
  };

  const buttons: Btn[] = [
    {
      id: 0,
      title: "не важно",
      size: CheckboxBtnSize.PRIMARY,
    },
    {
      id: 1,
      title: "1 км от дома",
      size: CheckboxBtnSize.PRIMARY,
    },
    {
      id: 3,
      title: "3 км от дома",
      size: CheckboxBtnSize.PRIMARY,
    },
  ];

  // const setDistance = (distance: number) => {
  //   setSectionRequest({
  //     ...sectionRequest,
  //     distance: distance ? distance : null,
  //   });
  // };

  const getCoordinates = async (address: string) => {
    const res = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=c3c2fbae-a37e-49a6-90b6-7628cb38ddee&geocode=${address}&format=json`,
    );
    const data = await res.json();
    const newCoords =
      data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        .split(" ")
        .map((pos: string) => +pos)
        .reverse();
    setSectionRequest({ ...sectionRequest, location: newCoords });
  };

  const getAddress = async (coords: [number, number]) => {
    const res = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=c3c2fbae-a37e-49a6-90b6-7628cb38ddee&geocode=${[
        ...coords,
      ]
        .reverse()
        .join(",")}&format=json`,
    );
    const data = await res.json();
    const newAddress =
      data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text
        .split(" ")
        .slice(1)
        .join(" ");
    setSearchingAddress(newAddress);
  };

  const handleChange = async (value: string) => {
    setSearchingAddress(value);
    const res = await fetch(
      `https://suggest-maps.yandex.ru/v1/suggest?apikey=${GEOSUGGEST_KEY}&text=${value}&types=locality,street,house&print_address=1`,
    );
    const addresses: YandexAnswer = await res.json();
    if (addresses.results) {
      const formattedAddresses = addresses.results.map((address) => ({
        id: address.distance.value,
        title: address.address.formatted_address,
      }));
      setAddressList(formattedAddresses);
    }
  };

  const mapValues = useMemo(() => {
    return { map, setMap };
  }, []);

  const handleClick = async (address: string) => {
    await getCoordinates(address);
    setSearchingAddress(address);
  };

  return (
    <MapContext.Provider value={mapValues}>
      <div className={styles.step}>
        <h2 className={styles.title}>
          <span className={styles.span}>Где</span> искать тренировки?
        </h2>
        <p className={styles.subtitle}>
          Хочу найти спортивные занятия не дальше чем:
        </p>
        <CheckboxPanel
          className={styles.distancePanel}
          setOption={() => {}}
          btns={buttons}
        />
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
            itemClickHandler={(e: SearchingItem) => handleClick(e.title)}
          />
          <Badge
            className={styles.badge}
            onClick={getGeoLocation}
            isActive={false}
            color={BadgeColor.PRIMARY}
          >
            <Icon type={IconTypes.LOCATION} color={IconColor.SECONDARY} />
            Моя локация
          </Badge>
        </div>
        <Map center={sectionRequest.location}>
          <LocationPlacemark setAddress={getAddress} />
        </Map>
        <Button
          onClick={() => setStep(step + 1)}
          className={styles.button}
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.FORWARD}
        >
          Продолжить <Icon type={IconTypes.RIGHT_ICON} />
        </Button>
      </div>
    </MapContext.Provider>
  );
};

export default StepLocation;
