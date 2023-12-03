import { FC, useContext } from "react";
import Map from "../../../../components/Map/Map.tsx";
import AppContext from "../../../../context/AppContext.ts";
import SectionPlacemark from "../../../../components/Map/SectionPlacemark/SectionPlacemark.tsx";
import { Section } from "../../../../types";
import styles from "./MapView.module.scss";
import { mapViewProps } from "../../types/index.ts";

const MapView: FC<mapViewProps> = ({ setActiveSection }) => {
  const { sectionRequest, filteredSections } = useContext(AppContext);
  const { location } = sectionRequest;
  // const [active, setActive] = useState<Section | null>(null);

  const handlePlacemarkHover = (section: Section) => {
    setActiveSection(section);
    console.log(section);
  };

  return (
    <div className={styles.container}>
      <Map center={location}>
        {filteredSections.map((section) => (
          <SectionPlacemark
            key={section.id}
            section={section}
            onHover={() => handlePlacemarkHover(section)}
          />
        ))}
      </Map>
    </div>
  );
};

export default MapView;
