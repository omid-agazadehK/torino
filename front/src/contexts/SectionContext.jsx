"use client";
import React, { createContext, useContext, useState } from "react";
const SectionContext = createContext();
function SectionProvider({ children }) {
  const [sectionId, setSectionId] = useState("profile");

  return (
    <SectionContext.Provider value={{ sectionId, setSectionId }}>
      {children}
    </SectionContext.Provider>
  );
}

export default SectionProvider;
export const useSelectSection = () => {
  return useContext(SectionContext);
};
