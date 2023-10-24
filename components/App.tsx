"use client";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Intro from "./Intro";
import NavBar from "./NavBar";
import { useState } from "react";

const App = ({}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="pages-container">
      <NavBar index={index} setIndex={setIndex} />
      <Intro />
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
};

export default App;
