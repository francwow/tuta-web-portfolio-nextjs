"use client";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Intro from "./Intro";

const App = ({}) => {
  return (
    <div className="pages-container">
      <Intro />
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
};

export default App;
