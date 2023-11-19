import React from "react";
import { StoryFn } from "@storybook/react";
import AppContext from "../../src/context/AppContext";
import { sports, sections } from "../../server/db.json";

export const ContextDecorator = (Story: StoryFn) => {
  return (
    <AppContext.Provider
      value={{
        sports,
        setSectionRequest: () => {},
        setSports: () => {},
        fetchedSections: [],
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
