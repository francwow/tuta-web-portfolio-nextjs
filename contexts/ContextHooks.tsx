"use client";

import { createContext, useContext } from "react";
import {
  LanguageContextType,
  MouseClickContextType,
  NavContextType,
  PointerContextType,
} from "../types/Types";

export const NavContext = createContext<NavContextType | null>(null);
export const PointerContext = createContext<PointerContextType | null>(null);
export const LanguageContext = createContext<LanguageContextType | null>(null);
export const MouseClickContext = createContext<MouseClickContextType | null>(
  null
);

export const useNavIndex = (): NavContextType => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const usePointer = (): PointerContextType => {
  const context = useContext(PointerContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useMouseClick = (): MouseClickContextType => {
  const context = useContext(MouseClickContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
