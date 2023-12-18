import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Header from "./Header";
import PageFour from "./PageFour";

const App = ({}) => {
  return (
    <div className="pages-container">
      <Header />
      {/* <NavBar /> */}
      {/* <Intro /> */}
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </div>
  );
};

export default App;
