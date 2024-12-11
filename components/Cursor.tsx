"use client";

import { useMouseClick, usePointer } from "@/contexts/ContextHooks";
import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const { pointerIn } = usePointer();
  const { mouseClick } = useMouseClick();

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPoint = { x: 0, y: 0 };
    const targetPoint = { x: 0, y: 0 };

    function lerp() {
      const dx = targetPoint.x - currentPoint.x;
      const dy = targetPoint.y - currentPoint.y;

      currentPoint.x += dx * 0.05;
      currentPoint.y += dy * 0.05;

      cursorRef.current?.style.setProperty("--x", `${currentPoint.x}`);
      cursorRef.current?.style.setProperty("--y", `${currentPoint.y}`);

      requestAnimationFrame(lerp);
    }

    function mouseMoveHandler() {
      document.addEventListener("pointermove", (event) => {
        const { clientX, clientY } = event;

        targetPoint.x = clientX;
        targetPoint.y = clientY;
      });
    }

    lerp();
    mouseMoveHandler();
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`${pointerIn ? "dot pointer-in" : "dot"} ${
          mouseClick ? "mouse-clicked" : ""
        }`}
      >
        <div className={"inside-dot"}></div>
      </div>
    </>
  );
};

export default Cursor;
