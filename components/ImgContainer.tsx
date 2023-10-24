import Image from "next/image";

type ImgContainerProps = {
  src: string;
};

const ImgContainer = ({ src }: ImgContainerProps) => {
  return (
    <div className="img-container">
      <div className="img-modal"></div>
      <Image
        width={1200}
        height={1200}
        src={src}
        alt="img"
        priority
        className="main-img"
      />
      <div className="img-fade-top"></div>
      <div className="img-fade-bottom"></div>
      <div className="img-fade-left"></div>
      <div className="img-fade-right"></div>
    </div>
  );
};

export default ImgContainer;
