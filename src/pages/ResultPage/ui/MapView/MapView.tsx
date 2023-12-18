import { FC, useContext, useState } from "react";
import Map from "../../../../components/Map/Map.tsx";
import AppContext from "../../../../context/AppContext.ts";
import SectionPlacemark from "../../../../components/Map/SectionPlacemark/SectionPlacemark.tsx";
import { Section } from "../../../../types";
import styles from "./MapView.module.scss";
import { mapViewProps } from "../../types";

const MapView: FC<mapViewProps> = ({ setActiveSection }) => {
  const { sectionRequest, filteredSections } = useContext(AppContext);
  const { location } = sectionRequest;
  const [selected, setSelected] = useState<Section | null>(null);

  const handlePlacemarkClick = (section: Section) => {
    setActiveSection(section);
    setSelected(section);
  };

  return (
    <div className={styles.container}>
      <Map center={location}>
        {filteredSections.map((section) => (
          <SectionPlacemark
            key={section.id}
            section={section}
            onClick={() => handlePlacemarkClick(section)}
            selected={section.id === selected?.id}
          />
        ))}
      </Map>
    </div>
  );
};

export default MapView;
