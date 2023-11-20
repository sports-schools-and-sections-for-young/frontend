// Preloader.tsx
import React from "react";
import styles from "./Preloader.module.scss";
import { PreloaderProps, PreloaderSize } from "./types";

const Preloader: React.FC<PreloaderProps> = ({
  size = PreloaderSize.Medium,
}) => {
  const sizeStyle = {
    width: size,
    height: size,
  };

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container} style={sizeStyle}>
        <span className={styles.preloader__round} style={sizeStyle} />
      </div>
    </div>
  );
};

export default Preloader;
