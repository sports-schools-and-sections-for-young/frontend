import { FC } from "react";
import Map from "../../../../components/Map/Map.tsx";
import { StepProps } from "../../types";
import styles from "./StepLocation.module.scss";

const points = [
  {
    coordinates: [59.945168, 30.346637],
    content: "Северный орёл",
  },
  {
    coordinates: [59.939509, 30.367428],
    content: "Панчер",
  },
  {
    coordinates: [59.941094, 30.35818],
    content: "Медный всадник",
  },
];

const StepLocation: FC<StepProps> = () => {
  return (
    <div className={styles.step}>
      <Map center={[59.936846, 30.312185]} points={points} />
    </div>
  );
};

export default StepLocation;
