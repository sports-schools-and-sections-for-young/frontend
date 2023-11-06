import styles from "./CooperationSection.module.scss";
import Accordeon from "../Accordion/Accordion";
import HeadingIcon from "../ui/HeadingIcon/HeadingIcon";
import { view, headingLevel } from "../ui/HeadingIcon/types";
import ImageCard, { ImageCardSize } from "../ui/ImageCard/ImageCard";
import accordionData from "../../utils/constants/accordionData";
import cooperation from "../../assets/images/cooperation.png";

const CooperationSection = () => {
  return (
    <section className={styles.cooperation}>
      <div className={styles.sectionContainer}>
        <HeadingIcon
          headingLevel={headingLevel.H2}
          title="Представителям спортшкол"
          view={view.BLUE}
        />
        <div className={styles.twoColumns}>
          <div className={styles.leftColumn}>
            <h3 className={styles.headerQuestion}>
              Зачем с нами сотрудничать?
            </h3>
            <p className={styles.description}>
              Почему стоит зарегистрировать вашу спортшколу или секцию на нашей
              платформе{" "}
            </p>
            <Accordeon accordionArr={accordionData.accordionArr} />
          </div>
          <ImageCard
            className={styles.image}
            src={cooperation}
            alt="Дети с мячами"
            size={ImageCardSize.EXTRA_LARGE}
          />
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
