import { MouseClick } from "@/types/Types";

type HandleMouseClick = {
  setMouseClick: (mouseClick: MouseClick) => void;
};

export const handleMouseClick = ({ setMouseClick }: HandleMouseClick) => {
  setMouseClick(true);
  setTimeout(() => {
    setMouseClick(false);
  }, 300);
};
