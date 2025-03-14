"use client";

import { useNavIndex } from "@/contexts/ContextHooks";
import ImgContainer from "./ImgContainer";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img from "@/assets/images/rostro.webp";

type PageFourProps = {
  index: number;
};

const PageFour = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });

  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
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
        <ImgContainer src={img.src} prio={false} />
      </div>
    </section>
  );
};

export default PageFour;
