// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import styles from './ModalSection.module.scss';
// import Button from '../ui/Button/Button';
// import { ButtonColor, ButtonTestId } from '../ui/Button/types';
// import sectionAdded from "../../assets/images/section-added.png";

// const ModalSection: React.FC = () => {
//   const navigate = useNavigate();

//   return (

//     <div className={styles.modalSection}>
//       <div className={styles.imgContainer}>
//         <img
//           className={styles.img}
//           src={sectionAdded}
//           alt="Статус секции"
//         />
//       </div>
//       <div className={styles.textContainer}>
//         <h1 className={styles.title}>Поздравляем, <span className={styles.span}>секция добавлена</span></h1>
//         <p className={styles.subtitle}>Теперь пользователи смогут найти вас и посетить занятие</p>
//         <div className={styles.buttonContainer}>
//         <Button
//           className={styles.button}
//           color={ButtonColor.PRIMARY}
//           testId={ButtonTestId.FORWARD}
//           onClick={() => navigate("/profile/*", { replace: true })}
//         >
//           Перейти в секции
//         </Button>
//         <Button
//           className={styles.button}
//           color={ButtonColor.SECONDARY}
//           testId={ButtonTestId.FORWARD}
//           onClick={() => navigate("/", { replace: true })}
//         >
//           На главную
//         </Button>
//       </div>
//       </div>
//       </div>
//   );
// };

// export default ModalSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModalSection.module.scss";
import Button from "../ui/Button/Button";
import { ButtonColor, ButtonTestId } from "../ui/Button/types";
import sectionAdded from "../../assets/images/section-added.png";
import Modal from "../Modal/Modal";

const ModalSection: React.FC = () => {
  const navigate = useNavigate();

  const closeModal = () => {

  };

  return (
    <Modal closeModal={closeModal}>
      <div className={styles.modalSection}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={sectionAdded} alt="Статус секции" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Поздравляем, <span className={styles.span}>секция добавлена</span>
          </h1>
          <p className={styles.subtitle}>
            Теперь пользователи смогут найти вас и посетить занятие
          </p>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.button}
              color={ButtonColor.PRIMARY}
              testId={ButtonTestId.FORWARD}
              onClick={() => navigate("/profile/*", { replace: true })}
            >
              Перейти в секции
            </Button>
            <Button
              className={styles.button}
              color={ButtonColor.SECONDARY}
              testId={ButtonTestId.FORWARD}
              onClick={() => navigate("/", { replace: true })}
            >
              На главную
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSection;
