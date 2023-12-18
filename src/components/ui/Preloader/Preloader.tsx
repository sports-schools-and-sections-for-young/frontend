import React from "react";
import classnames from "classnames";
import styles from "./Preloader.module.scss";
import { PreloaderProps, PreloaderSize } from "./types";

const Preloader: React.FC<PreloaderProps> = ({
  size = PreloaderSize.Medium,
  className = "",
}) => {
  const sizeStyle = {
    width: size,
    height: size,
  };

  const preloaderClass = classnames({
    [styles.preloader]: true,
    [className]: true,
  });

  return (
    <div className={preloaderClass}>
      <div className={styles.preloader__container} style={sizeStyle}>
        <span className={styles.preloader__round} style={sizeStyle} />
      </div>
    </div>
  );
};

export default Preloader;
