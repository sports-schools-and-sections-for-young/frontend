import { Placemark } from "@pbe/react-yandex-maps";
import { FC } from "react";
import Icon from "../../../assets/images/icons/MapPin.svg";
import { Section } from "../../../types";

interface SectionPlacemarkProps {
  section: Section;
  onHover: () => void;
}

const SectionPlacemark: FC<SectionPlacemarkProps> = (props) => {
  const { section, onHover } = props;

  return (
    <Placemark
      geometry={section.location}
      options={{
        iconLayout: "default#image",
        iconImageHref: Icon,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
        hasBalloon: true,
        draggable: true,
      }}
      onHover={onHover}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
    />
  );
};

export default SectionPlacemark;
