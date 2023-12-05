import { Dispatch, SetStateAction, useContext } from "react";
import { Section } from "../types";
import { searchSections } from "../utils/api";
import AppContext from "../context/AppContext.ts";

export const useSectionsFetch = (
  setLoader: Dispatch<SetStateAction<boolean>>,
) => {
  const { setFetchedSections, sectionRequest, setFilteredSections } =
    useContext(AppContext);

  const fetchSections = async () => {
    setLoader(true);
    const sections: Section[] = await searchSections(sectionRequest);
    setFetchedSections(sections);

    if (sectionRequest.freeTrial) {
      setFilteredSections(
        sections.filter(
          (section) =>
            section.price <= sectionRequest.maxPrice && section.free_class,
        ),
      );
    } else {
      setFilteredSections(
        sections.filter((section) => section.price <= sectionRequest.maxPrice),
      );
    }

    setLoader(false);
  };

  return fetchSections;
};
