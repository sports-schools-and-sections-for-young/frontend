import React, { useEffect, useState } from "react";
import { Section } from "../../types";

type favourite = [Section[], React.Dispatch<React.SetStateAction<Section[]>>];

const key = "favouriteSectionsId";
export const useFavourite = (): favourite => {
  const [favourite, setFavourite] = useState<Section[]>(() => {
    try {
      const favouriteList = localStorage.getItem(key);
      return favouriteList ? JSON.parse(favouriteList) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    if (favourite) {
      try {
        localStorage.setItem(key, JSON.stringify(favourite));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log("Ошибка добавления в избранное", error);
      }
    }
  }, [favourite]);

  return [favourite, setFavourite];
};
