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
    threshold: 0.95,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
      console.log("#4 in view", index);
      setIndex(3);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="contacto"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      <div className="page-container">
        <ImgContainer src={"/images/webpImages/rostro.webp"} />
      </div>
    </section>
  );
};

export default PageFour;
