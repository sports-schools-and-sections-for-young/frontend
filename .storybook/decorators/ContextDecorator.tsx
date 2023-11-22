import React from "react";
import { StoryFn } from "@storybook/react";
import AppContext from "../../src/context/AppContext";
import { sports, sections } from "../../server/db.json";

const sect = sections.map((section) => {
  // Типы в db.json не удовлетворяют интерфейсу  Section
  return {
    ...section,
    gender: "male",
    schedule: {
      days: [""],
      time: "",
    },
  };
});

export const ContextDecorator = (Story: StoryFn) => {
  return (
    <AppContext.Provider
      value={{
        sports,
        setSectionRequest: () => {},
        setSports: () => {},
        fetchedSections: sect,
        setFetchedSections: () => {},
        filteredSections: [],
        setFilteredSections: () => {},
        sectionRequest: {
          age: null,
          gender: null,
          sports: [],
          location: [0, 0],
          distance: 0,
          maxPrice: 0,
        },
      }}
    >
      <Story />
    </AppContext.Provider>
  );
};
