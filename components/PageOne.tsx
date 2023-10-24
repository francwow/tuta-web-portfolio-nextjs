import Image from "next/image";

type PageOneProps = {
  index: number;
};

const PageOne = () => {
  return (
    <section className={"page-wrapper"}>
      <div className="page-container">
        <h1>ONE</h1>
        {/* <div className="img-container">
          <div className="img-modal"></div>
          <Image
            width={1200}
            height={1200}
            src={"/images/cara.jpg"}
            alt="img"
            priority
            className="main-img"
          />
          <div className="img-fade-top"></div>
          <div className="img-fade-bottom"></div>
          <div className="img-fade-left"></div>
          <div className="img-fade-right"></div>
        </div> */}
      </div>
    </section>
  );
};

export default PageOne;
