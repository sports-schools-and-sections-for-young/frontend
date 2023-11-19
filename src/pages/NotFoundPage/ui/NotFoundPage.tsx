import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/ui/Header/Header";
import styles from "./NotFoundPage.module.scss";
import Button from "../../../components/ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../../../components/ui/Button/types";
import Icon from "../../../components/ui/Icon/Icon";
import img from "../../../assets/images/404.png";
import { IconTypes } from "../../../components/ui/Icon/types";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className={styles.notFound}>
        <img className={styles.img} src={img} alt="Страница не найдена" />
        <h2 className={styles.title}>Страница не найдена</h2>
        <Button
          color={ButtonColor.PRIMARY}
          testId={ButtonTestId.FORWARD}
          onClick={() => navigate("/", { replace: true })}
        >
          На главную
          <Icon type={IconTypes.RIGHT_ICON} />
        </Button>
      </main>
    </>
  );
};
export default NotFound;
