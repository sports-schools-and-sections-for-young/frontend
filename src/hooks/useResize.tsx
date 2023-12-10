import { useState, useEffect } from "react";
import screenWidths from "../app/styles/variables/screenWidths.module.scss";

const mobileWidth = parseInt(screenWidths.mobileWidth, 10);
const tabletWidth = parseInt(screenWidths.tabletWidth, 10);

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isMobileScreen: width <= mobileWidth,
    isTabletScreen: width <= tabletWidth && width > mobileWidth,
  };
};
