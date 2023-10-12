import Image from "next/image";

type PageOneProps = {
  index: number;
};

const PageOne = ({ index }: PageOneProps) => {
  return (
    <div
      className={
        index === 0
          ? "page-one-wrapper flex flex-col items-center justify-center bg-white"
          : "page-one-wrapper move-out flex flex-col items-center justify-center bg-white"
      }
    >
      {/* <h1
      // style={{ transform: `translate3d(0, ${translateText}%, 0)` }}
      className="main-heading"
    >
      David Tuta
    </h1> */}
      <div className="page-one">
        <div className="placeholder-text">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            mattis sem eget enim pretium, eget blandit velit accumsan. Vivamus
            efficitur augue diam. Fusce in finibus sem. Pellentesque auctor
            ipsum quis elit vestibulum faucibus. Suspendisse sit amet ipsum a
            elit elementum eleifend. Curabitur mattis nisl erat, at aliquet
            ligula tincidunt eget. Cras varius ipsum a magna vestibulum, at
            vulputate magna tincidunt.
          </p>
        </div>
        <div className="img-container">
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
        </div>
      </div>
    </div>
  );
};

export default PageOne;
