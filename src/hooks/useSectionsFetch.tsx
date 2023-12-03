import { Dispatch, SetStateAction, useContext } from "react";
import { Section } from "../types";
import { searchSections } from "../utils/api";
import AppContext from "../context/AppContext.ts";

export const useSectionsFetch = (
  setLoader: Dispatch<SetStateAction<boolean>>,
) => {
  const {
    setFetchedSections,
    sectionRequest,
    setFilteredSections,
    setSectionRequest,
  } = useContext(AppContext);

  const fetchSections = async () => {
    setLoader(true);
    const sections: Section[] = await searchSections(sectionRequest);
    setFetchedSections(sections);
    setFilteredSections(sections);

    setSectionRequest({
      ...sectionRequest,
      maxPrice: Math.max(...sections.map((section) => section.price)),
    });

    setLoader(false);
  };

  return fetchSections;
};
