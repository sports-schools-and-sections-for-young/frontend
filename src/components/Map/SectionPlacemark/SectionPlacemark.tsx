import { Placemark } from "@pbe/react-yandex-maps";
import { FC, useState } from "react";
import { renderToString } from "react-dom/server";
import Icon from "../../../assets/images/icons/MapPin.svg";
import IconHover from "../../../assets/images/icons/MapPinHover.svg";

import { Section } from "../../../types";
import PlacemarkHint from "../PlacemarkHint/PlacemarkHint.tsx";

interface SectionPlacemarkProps {
  section: Section;
  onClick: () => void;
  selected: boolean;
}

export const SectionPlacemark: FC<SectionPlacemarkProps> = (props) => {
  const { section, onClick, selected } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Placemark
      geometry={[section.latitude, section.longitude]}
      options={{
        iconLayout: "default#image",
        iconImageHref: hovered || selected ? IconHover : Icon,
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
      }}
      properties={{
        hintContent: renderToString(
          <PlacemarkHint section={section} visible={hovered} />,
        ),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
    />
  );
};

export default SectionPlacemark;
