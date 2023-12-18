import { YMaps, Map } from "@pbe/react-yandex-maps";
import { FC, HTMLAttributes, useContext } from "react";
import styles from "./Map.module.scss";
import MapContext from "../../context/MapContext.ts";
import { GEOCODER_KEY } from "../../utils/variables.ts";

interface YandexMapProps extends HTMLAttributes<HTMLElement> {
  center: number[];
}

const YandexMap: FC<YandexMapProps> = (props) => {
  const { center, children } = props;

  const { setMap } = useContext(MapContext);

  return (
    <YMaps query={{ apikey: GEOCODER_KEY }}>
      <div className={styles.mapWrapper}>
        <Map
          className={styles.map}
          onLoad={(ymapsInstance) => {
            setMap(ymapsInstance);
          }}
          modules={["util.bounds", "geolocation"]}
          state={{
            center,
            zoom: 12,
          }}
          options={{ suppressMapOpenBlock: true }}
        >
          {children}
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
