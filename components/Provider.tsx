"use client";

import { PropsWithChildren, useState } from "react";
import { NavContext } from "../contexts/NavContext";
import { NavIndexType } from "../types/Types";

const Provider = (props: PropsWithChildren) => {
  const [index, setIndex] = useState<NavIndexType>(0);

  return (
    <NavContext.Provider value={{ index, setIndex }}>
      {props.children}
    </NavContext.Provider>
  );
};

export default Provider;
