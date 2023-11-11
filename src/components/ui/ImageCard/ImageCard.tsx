import { FC } from "react";
import classnames from "classnames";
import styles from "./ImageCard.module.scss";
import { ImageCardProps } from "./types";

const ImageCard: FC<ImageCardProps> = (props) => {
  const { className = "", src, alt, size, ...rest } = props;

  const imageCardClass = classnames({
    [styles.image]: true,
    [styles[size]]: true,
    [className]: true,
  });

  return (
    <img
      src={src}
      alt={alt}
      className={`${imageCardClass} ${styles.imageSize}`}
      {...rest}
    />
  );
};

export default ImageCard;
