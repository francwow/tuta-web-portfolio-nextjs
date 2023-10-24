import ImgContainer from "./ImgContainer";

type PageTwo = {
  index: number;
};

const PageTwo = () => {
  return (
    <section id="acerca" className={"page-wrapper"}>
      <div className="page-container">
        <ImgContainer src={"/images/brazos.jpg"} />
      </div>
    </section>
  );
};

export default PageTwo;
