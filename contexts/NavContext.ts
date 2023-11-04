"use client";

import { createContext, useContext } from "react";
import { NavContextType } from "../types/Types";

export const NavContext = createContext<NavContextType | null>(null);

const useNavIndex = (): NavContextType => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export default useNavIndex;
