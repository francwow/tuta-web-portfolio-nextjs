export type NavIndexType = number;

export type PointerIn = boolean;

export type MouseClick = boolean;

export type LanguageType = "ES" | "EN";

export type NavContextType = {
  index: NavIndexType;
  setIndex: (index: number) => void;
};

export type PointerContextType = {
  pointerIn: PointerIn;
  // eslint-disable-next-line no-unused-vars
  setPointerIn: (pointerIn: PointerIn) => void;
};

export type MouseClickContextType = {
  mouseClick: MouseClick;
  setMouseClick: (mouseClick: MouseClick) => void;
};

export type LanguageContextType = {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
};
