import { FC } from "react";
import styles from "./Reason.module.scss";
import { ReasonProps } from "./types";
import ImageCard, { ImageCardSize } from "../ImageCard/ImageCard";
import HeadingIcon from "../HeadingIcon/HeadingIcon";
import { headingLevel, view } from "../HeadingIcon/types";

const Reason: FC<ReasonProps> = (props) => {
  const { title, about, description, img } = props;
  return (
    <article className={styles.reason}>
      <div className={styles.imageBlock}>
        <ImageCard
          className={styles.image}
          size={ImageCardSize.LARGE}
          src={img}
          alt={title}
        />
        <HeadingIcon
          className={styles.title}
          headingLevel={headingLevel.H4}
          title={title}
          view={view.WHITE}
        />
      </div>
      <p className={styles.about}>{about}</p>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default Reason;
