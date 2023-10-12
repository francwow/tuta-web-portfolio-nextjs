"use client";

import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    // Find a way to block scrolling while intro animation finishes
  }, []);

  return (
    <div className="intro-modal">
      <div className="intro-heading-container">
        <video src="/videos/smoke.mp4" autoPlay muted></video>
        <h1 className="text-white intro-heading">
          <span>D</span>
          <span>A</span>
          <span>V</span>
          <span>I</span>
          <span>D</span>
          <span>&nbsp;</span>
          <span>T</span>
          <span>U</span>
          <span>T</span>
          <span>A</span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;
