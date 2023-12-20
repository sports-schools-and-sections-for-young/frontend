import { useNavigate } from "react-router-dom";
import ButtonBackMobile from "../../../../components/ui/ButtonBackMobile/ButtonBackMobile.tsx";
import ImageCard from "../../../../components/ui/ImageCard/ImageCard.tsx";
import styles from "./MobileNavigation.module.scss";
import logo from "../../../../assets/images/Logo.png";
import { ImageCardSize } from "../../../../components/ui/ImageCard/types";

const MobileNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navigation}>
      <ButtonBackMobile onClick={() => navigate("/")} />
      <ImageCard
        className={styles.image}
        src={logo}
        alt="Логотип СпортХаб"
        size={ImageCardSize.AUTH_LOGO_IMG}
      />
    </div>
  );
};

export default MobileNavigation;
