import { FC, useContext } from "react";
import { Circle } from "@pbe/react-yandex-maps";
import AppContext from "../../../context/AppContext.ts";

interface DistanceCircleProps {
  distance: number;
}

const DistanceCircle: FC<DistanceCircleProps> = ({ distance }) => {
  const { sectionRequest } = useContext(AppContext);

  return (
    <Circle
      geometry={[sectionRequest.location, distance]}
      options={{
        fillColor: "rgba(170, 191, 233, 0.50)",
        strokeWidth: 0,
      }}
    />
  );
};

export default DistanceCircle;
