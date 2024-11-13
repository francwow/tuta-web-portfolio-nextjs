import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Intro from "./Intro";
import Header from "./Header";
import PageFour from "./PageFour";
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
