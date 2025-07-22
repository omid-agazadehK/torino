"use client";
import React, { createContext, useState } from "react";
export const DropdownContext = createContext();
function DropdownProvider({ children }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  return (
    <DropdownContext.Provider value={{ openDropdownId, setOpenDropdownId }}>
      {children}
    </DropdownContext.Provider>
  );
}

export default DropdownProvider;
