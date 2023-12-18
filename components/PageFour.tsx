"use client";

import useNavIndex from "@/contexts/NavContext";
import ImgContainer from "./ImgContainer";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type PageFourProps = {
  index: number;
};

const PageFour = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
      console.log("#4 in view");
      setIndex(3);
    }
  }, [inView]);

  return (
    <section ref={ref} id="contacto" className={"page-wrapper"}>
      <div className="page-container">
        <ImgContainer src={"/images/webpImages/rostro.webp"} />
      </div>
    </section>
  );
};

export default PageFour;
