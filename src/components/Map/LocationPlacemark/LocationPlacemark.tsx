import { FC, useContext, useRef } from "react";
import { Placemark } from "@pbe/react-yandex-maps";
import AppContext from "../../../context/AppContext.ts";
import Icon from "../../../assets/images/icons/MapPin.svg";

interface LocationPlacemarkProps {
  setAddress: (coords: [number, number]) => unknown;
}

const LocationPlacemark: FC<LocationPlacemarkProps> = ({ setAddress }) => {
  const { sectionRequest, setSectionRequest } = useContext(AppContext);

  const pointRef = useRef(undefined);

  return (
    <Placemark
      instanceRef={pointRef}
      geometry={sectionRequest.location}
      options={{
        iconLayout: "default#image",
        iconImageHref: Icon,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
        hasBalloon: true,
        draggable: true,
      }}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      onDragEnd={() => {
        // @ts-ignore
        const newCoords = pointRef.current?.geometry._coordinates;
        setSectionRequest({ ...sectionRequest, location: newCoords });
        setAddress(newCoords);
      }}
    />
  );
};

export default LocationPlacemark;
