import { FC, useContext, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useNavigate } from "react-router-dom";
import { geolocation } from "yandex-maps";
import Map from "../../../../components/Map/Map.tsx";
import { StepProps } from "../../types";
import styles from "./StepLocation.module.scss";
import LocationPlacemark from "../../../../components/Map/LocationPlacemark/LocationPlacemark.tsx";
import AppContext from "../../../../context/AppContext.ts";
import MapContext from "../../../../context/MapContext.ts";
import SearchInput, {
  SearchingItem,
} from "../../../../components/ui/SearchInput/SearchInput.tsx";
import { GEOCODER_KEY } from "../../../../utils/variables.ts";
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
import { distanceButtons } from "../../../../utils/constants/distanceButtons.ts";
import CheckboxPanel from "../../../../components/ui/CheckboxPanel/CheckboxPanel.tsx";
import {
  getCoordinates,
  getGeoLocation,
  getGeosuggestAddresses,
} from "../../../../utils/functions";
import DistanceCircle from "../../../../components/Map/DistanceCircle/DistanceCircle.tsx";
import { useResize } from "../../../../hooks/useResize.tsx";
import Location from "../../../../assets/images/icons/Location.svg?react";

interface IMapInstance {
  geolocation: {
    get: (
      options?: geolocation.IGeolocationOptions,
    ) => Promise<{ geoObjects: { position: [number, number] } }>;
  };
}

const StepLocation: FC<StepProps> = ({ step, setStep }) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  const [map, setMap] = useState<IMapInstance>();

  const navigate = useNavigate();

  const [searchingAddress, setSearchingAddress] = useState("");
  const debounced = useDebouncedCallback(async (value) => {
    const newCoords = await getCoordinates(value);
    setSectionRequest({ ...sectionRequest, location: newCoords });
  }, 3000);
  const [addressList, setAddressList] = useState<SearchingItem[]>([]);

  const { isMobileScreen } = useResize();

  const getAddress = async (coords: [number, number]) => {
    const res = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${GEOCODER_KEY}&geocode=${[
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

  const handleGeolocation = async () => {
    const newLocation = await getGeoLocation(
      map as IMapInstance,
      sectionRequest.location,
    );
    setSectionRequest({
      ...sectionRequest,
      location: newLocation,
    });
    await getAddress(newLocation);
  };

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

  const mapValues = useMemo(() => {
    return { map, setMap };
  }, []);

  const checkboxPanel = (
    <CheckboxPanel
      activeOption={sectionRequest.distance || 0}
      className={styles.distancePanel}
      setOption={(option) =>
        setSectionRequest((requestData) => ({
          ...requestData,
          distance: option,
        }))
      }
      btns={distanceButtons}
    />
  );

  return (
    <MapContext.Provider value={mapValues}>
      <div className={styles.step}>
        <h2 className={styles.title}>
          <span className={styles.span}>Где</span> искать тренировки?
        </h2>
        <p className={styles.subtitle}>
          Хочу найти спортивные занятия не дальше чем:
        </p>
        {!isMobileScreen && checkboxPanel}
        <div className={styles.controlWrapper}>
          <SearchInput
            labelName="Адрес"
            placeholder="Введите улицу и номер дома"
            type="text"
            hasFilter={false}
            searchingList={addressList}
            value={searchingAddress}
            iconType={InputIcon.MAGNIGY}
            iconPosition={InputIconPosition.RIGHT}
            onChange={(e) => handleChange(e.target.value)}
            itemClickHandler={(e: SearchingItem) => handleItemClick(e.title)}
          />
          {!isMobileScreen && (
            <Badge
              className={styles.badge}
              onClick={handleGeolocation}
              isActive={false}
              color={BadgeColor.PRIMARY}
            >
              <Icon type={IconTypes.LOCATION} color={IconColor.SECONDARY} />
              Моя локация
            </Badge>
          )}
        </div>
        {isMobileScreen && checkboxPanel}
        <div className={styles.mapContainer}>
          <Map center={sectionRequest.location}>
            <LocationPlacemark setAddress={getAddress} />
            {sectionRequest.distance && (
              <DistanceCircle distance={sectionRequest.distance * 1000} />
            )}
          </Map>
          <button
            type="button"
            className={styles.locationButton}
            onClick={handleGeolocation}
          >
            <Location />
          </button>
        </div>
        <Button
          onClick={() => {
            navigate("/search", { state: { step: step + 1 } });
            setStep(step + 1);
          }}
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
