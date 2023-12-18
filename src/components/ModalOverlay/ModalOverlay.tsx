import { FC } from "react";
import styles from "./ModalOverlay.module.scss";

interface ModalOverlayProps {
  onClick: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClick }) => {
  return <div role="dialog" className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
