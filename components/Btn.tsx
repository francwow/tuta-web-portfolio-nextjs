"use client";

import { PropsWithChildren } from "react";
import { useMouseClick, usePointer } from "../contexts/ContextHooks";
import { handleMouseClick } from "@/functions/mouseClick";

const Btn = (props: PropsWithChildren) => {
  const { setPointerIn } = usePointer();
  const { mouseClick, setMouseClick } = useMouseClick();

  return (
    <div
      onPointerEnter={() => setPointerIn(true)}
      onPointerLeave={() => setPointerIn(false)}
      onClick={() => {
        handleMouseClick({ setMouseClick });
      }}
      className="btn-container"
    >
      {props.children}
    </div>
  );
};

export default Btn;
