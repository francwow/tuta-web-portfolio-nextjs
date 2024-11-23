"use client";

import { PropsWithChildren } from "react";

const MainBtn = (props: PropsWithChildren) => {
  return (
    <div className="main-btn-container">
      <button className="main-btn">{props.children}</button>
    </div>
  );
};

export default MainBtn;
