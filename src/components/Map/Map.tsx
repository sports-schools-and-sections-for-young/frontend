import { YMaps, Map } from "@pbe/react-yandex-maps";
import { FC, HTMLAttributes, useContext } from "react";
import styles from "./Map.module.scss";
import MapContext from "../../context/MapContext.ts";

interface YandexMapProps extends HTMLAttributes<HTMLElement> {
  center: number[];
}

const YandexMap: FC<YandexMapProps> = (props) => {
  const { center, children } = props;

  const { setMap } = useContext(MapContext);

  return (
    <YMaps query={{ apikey: "c3c2fbae-a37e-49a6-90b6-7628cb38ddee" }}>
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
        >
          {children}
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
