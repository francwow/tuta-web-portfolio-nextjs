import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import Intro from "./Intro";
import NavBar from "./NavBar";
import Header from "./Header";

const App = ({}) => {
  return (
    <div className="pages-container">
      <Header />
      {/* <NavBar /> */}
      {/* <Intro /> */}
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
};

export default App;
