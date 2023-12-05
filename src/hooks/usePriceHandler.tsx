import { useContext } from "react";
import AppContext from "../context/AppContext.ts";

export const usePriceHandler = (): {
  maxPrice: number;
  setMaxPrice: (price: number) => void;
  setFreeTrial: () => void;
  handlePriceOptions: () => void;
} => {
  const {
    sectionRequest,
    fetchedSections,
    setSectionRequest,
    filteredSections,
    setFilteredSections,
  } = useContext(AppContext);

  const setMaxPrice = (price: number) => {
    setSectionRequest((request) => ({
      ...request,
      maxPrice: price,
    }));
  };

  const maxPrice =
    sectionRequest.maxPrice < Infinity && sectionRequest.maxPrice > -Infinity
      ? sectionRequest.maxPrice
      : fetchedSections.length
      ? Math.max(...fetchedSections.map((section) => section.price))
      : 0;

  const setFreeTrial = () =>
    setSectionRequest((requestData) => ({
      ...requestData,
      freeTrial: !requestData.freeTrial,
    }));

  const handlePriceOptions = async () => {
    if (sectionRequest.freeTrial) {
      const sectionsWithTrial = filteredSections.filter(
        (section) =>
          section.free_class && section.price <= sectionRequest.maxPrice,
      );
      setFilteredSections(sectionsWithTrial);
    } else {
      setFilteredSections(
        fetchedSections.filter(
          (section) => section.price <= sectionRequest.maxPrice,
        ),
      );
    }
  };

  return { maxPrice, setMaxPrice, setFreeTrial, handlePriceOptions };
};
