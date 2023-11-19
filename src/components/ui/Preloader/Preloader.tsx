import { FC } from "react";
import classnames from "classnames";
import styles from "./Preloader.module.scss";

interface PreloaderProps {
  className?: string;
}

const Preloader: FC<PreloaderProps> = ({ className = "" }) => {
  const preloaderClass = classnames({
    [styles.preloader]: true,
    [className]: true,
  });

  return (
    <div className={preloaderClass}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round} />
      </div>
    </div>
  );
};

export default Preloader;
