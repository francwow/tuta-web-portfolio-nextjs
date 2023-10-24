import Image from "next/image";
import ImgContainer from "./ImgContainer";

type PageOneProps = {
  index: number;
};

const PageOne = () => {
  return (
    <section id="trabajo" className={"page-wrapper"}>
      <div className="page-container">
        <ImgContainer src={"/images/cara.jpg"} />
      </div>
    </section>
  );
};

export default PageOne;
