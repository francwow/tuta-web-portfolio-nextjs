import ImgContainer from "./ImgContainer";

type PageThree = {
  index: number;
};

const PageThree = () => {
  return (
    <section id="contacto" className={"page-wrapper"}>
      <div className="page-container">
        <ImgContainer src={"/images/rostro.jpg"} />
      </div>
    </section>
  );
};

export default PageThree;
