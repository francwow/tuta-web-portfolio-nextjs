"use client";

import useNavIndex from "@/contexts/NavContext";
import ImgContainer from "./ImgContainer";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type PageThree = {
  index: number;
};

const PageThree = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.95,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
      console.log("#3 in view", index);
      setIndex(2);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="acerca"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      <div className="page-container">
        <ImgContainer src={"/images/webpImages/brazos.webp"} />
      </div>
    </section>
  );
};

export default PageThree;
