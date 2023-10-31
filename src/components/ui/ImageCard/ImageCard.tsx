import { ImgHTMLAttributes, FC } from "react";
import classnames from "classnames";
import styles from "./ImageCard.module.scss";

export enum ImageCardSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRA_LARGE = "extra-large",
}

interface ImageCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  size: ImageCardSize;
  src: string;
  alt: string;
}

const ImageCard: FC<ImageCardProps> = (props) => {
  const { className = "", src, alt, size, ...rest } = props;

  const imageCardClass = classnames({
    [styles.image]: true,
    [styles[size]]: true,
    [className]: true,
  });

  return (
    <div className={imageCardClass} {...rest}>
      <img src={src} alt={alt} className={styles.imageSize} />
    </div>
  );
};

export default ImageCard;
