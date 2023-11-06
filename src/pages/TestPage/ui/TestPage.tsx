import styles from "./TestPage.module.scss";
import YandexMap from "../../../components/Map/Map.tsx";

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

const TestPage = () => {
  return (
    <div className={styles.testPage}>
      <YandexMap points={points} center={[55.751574, 37.573856]} />
    </div>
  );
};

export default TestPage;
