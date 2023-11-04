"use client";

import useNavIndex from "@/contexts/NavContext";
import ImgContainer from "./ImgContainer";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import WorkGallery from "./WorkGallery";

type PageTwo = {
  index: number;
};

const PageTwo = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  let dragStart = false;
  let prevPagex: any;
  let prevScrollLeft: any;

  // if ()

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
      console.log("#2 in view");
      setIndex(1);
    }
  }, [inView]);

  const dragStartFn = (e: any) => {
    // updating global variables value on mouse down event
    dragStart = true;
    prevPagex = e.clientX;
    // console.log(prevPagex, "dragStart");
    prevScrollLeft = galleryRef.current?.scrollLeft;
    if (containerRef.current !== null) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const dragStopFn = (e: any) => {
    dragStart = false;
    prevPagex = e.clientX;
    // console.log(prevPagex, "dragStop");
    if (galleryRef.current !== null) {
      prevScrollLeft = galleryRef.current.scrollLeft;
    }
    if (containerRef.current !== null) {
      containerRef.current.style.cursor = "grab";
    }
  };

  const dragging = (e: any) => {
    if (!dragStart) return;
    e.preventDefault();
    if (galleryRef.current !== null) {
      let positionDiff = e.clientX - prevPagex;
      // console.log(positionDiff, "diff");
      galleryRef.current.scrollLeft = prevScrollLeft - positionDiff;
    }
  };

  return (
    <section ref={ref} id="acerca" className={"page-wrapper"}>
      <div className="page-container">
        <div
          ref={containerRef}
          onMouseMove={(e) => dragging(e)}
          onMouseDown={(e) => dragStartFn(e)}
          onMouseUp={(e) => dragStopFn(e)}
          className="content-container"
        >
          <div ref={galleryRef} className="work-gallery-wrapper">
            <WorkGallery />
          </div>
        </div>
        {/* <ImgContainer src={"/images/webpImages/brazos.webp"} /> */}
      </div>
    </section>
  );
};

export default PageTwo;
