import PageOne from "./_Home";
import PageTwo from "./_Work";
import PageThree from "./_About";
import Intro from "./Intro";
import Header from "./Header";
import PageFour from "./_Contact";
import NavBarMobile from "./NavBarMobile";

const App = ({}) => {
  return (
    <div className="pages-container">
      <Header />
      <NavBarMobile />
      {/* <Intro /> */}
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
};

export default App;
