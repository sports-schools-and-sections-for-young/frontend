import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FC, useRef } from "react";
import styles from "./Map.module.scss";

import MapPin from "../../assets/images/icons/MapPin.svg";

interface Point {
  coordinates: number[];
  content: string;
}

interface YandexMapProps {
  center: number[];
  points: Point[];
}

const YandexMap: FC<YandexMapProps> = ({ center, points }) => {
  const map = useRef(null);
  const ymaps = useRef(null);

  console.log(ymaps.current);

  const getGeoLocation = (ymaps) => {
    return ymaps.geolocation
      .get({ provider: "yandex", mapStateAutoApply: true })
      .then((result) => {
        console.log(result.geoObjects.position);
        ymaps.geocode(result.geoObjects.position).then((res) => {
          res.geoObjects.get(0).geometry.getCoordinates();
        });
      });
  };

  return (
    <>
      <button type="button" onClick={() => getGeoLocation(ymaps.current)}>
        ЖМИ
      </button>
      <YMaps query={{ apikey: "c3c2fbae-a37e-49a6-90b6-7628cb38ddee" }}>
        <div className={styles.mapWrapper}>
          <Map
            className={styles.map}
            instanceRef={map}
            onLoad={(ymapsInstance) => {
              ymaps.current = ymapsInstance;
            }}
            modules={["util.bounds", "geolocation"]}
            defaultState={{
              center,
              zoom: 12,
            }}
          >
            {/* <ObjectManager */}
            {/*    instanceRef={objectManager} */}
            {/*    options={{ */}
            {/*      clusterize: true, */}
            {/*      gridSize: 32, */}
            {/*    }} */}
            {/*    objects={{ */}
            {/*      openBalloonOnClick: true, */}
            {/*      preset: "islands#greenDotIcon", */}
            {/*    }} */}
            {/*    clusters={{ */}
            {/*      preset: "islands#redClusterIcons", */}
            {/*    }} */}
            {/*    defaultFeatures={features} */}
            {/* /> */}

            {points.map((point) => (
              <Placemark
                geometry={point.coordinates}
                properties={{
                  balloonContent: `<div class="balloon">${point.content}!!!</div>`,
                }}
                options={{
                  iconLayout: "default#image",
                  icon: MapPin,
                  iconImageSize: [40, 40],
                  iconImageOffset: [-20, -40],
                  hasBalloon: true,
                  draggable: true,
                }}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            ))}
          </Map>
        </div>
      </YMaps>
    </>
  );
};

export default YandexMap;
