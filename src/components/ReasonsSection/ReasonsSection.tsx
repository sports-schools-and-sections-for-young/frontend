import { FC } from "react";
import styles from "./ReasonsSection.module.scss";
import Reason from "../ui/Reason/Reason";
import HeadingIcon from "../ui/HeadingIcon/HeadingIcon";
import { headingLevel, view } from "../ui/HeadingIcon/types";
import { ReasonsSectionProps } from "./type";

const ReasonsSection: FC<ReasonsSectionProps> = (props) => {
  const { reasonArr } = props;
  return (
    <section className={styles.reasons}>
      <div className={styles.sectionContainer}>
        <HeadingIcon
          headingLevel={headingLevel.H2}
          title="Родителям и  спортсменам"
          view={view.WHITE}
        />
        <h3 className={styles.title}>Почему мы?</h3>
        <div className={styles.container}>
          {reasonArr.map((reason) => {
            return (
              <Reason
                key={reason.title}
                title={reason.title}
                about={reason.about}
                description={reason.description}
                img={reason.img}
              />
            );
          })}
        </div>
      </div>
      {/* <div className={styles.dots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div> */}
    </section>
  );
};

export default ReasonsSection;
