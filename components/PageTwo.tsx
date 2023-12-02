"use client";

import useNavIndex from "@/contexts/NavContext";
import ImgContainer from "./ImgContainer";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { galleryItems } from "@/data/galleryData";
import GalleryItem from "./GalleryItem";

type PageTwo = {
  index: number;
};

const PageTwo = () => {
  // const [translateX, setTranslateX] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLElement>(null);
  const rightIconRef = useRef<HTMLElement>(null);

  let maxScrollLeft: number;

  maxScrollLeft = galleryRef.current
    ? galleryRef.current.scrollWidth - galleryRef.current.clientWidth
    : 0;

  let dragStart = false;
  let prevPagex: any;
  let prevScrollLeft: any;

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
    if (galleryRef.current !== null) {
      galleryRef.current.style.scrollBehavior = "auto";
    }
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
      console.log(galleryRef.current.scrollLeft);
      galleryRef.current.scrollLeft = prevScrollLeft - positionDiff;
    }
  };

  function vw(percent: number) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (percent * w) / 100;
  }

  const btnClick = (dir: string) => {
    if (galleryRef.current !== null) {
      if (dir === "right") {
        galleryRef.current.style.scrollBehavior = "smooth";
        galleryRef.current.scrollLeft += 250 + vw(5);

        console.log(maxScrollLeft);
      } else if (dir === "left") {
        galleryRef.current.style.scrollBehavior = "smooth";
        galleryRef.current.scrollLeft += -(250 + vw(5));
        console.log(galleryRef.current.scrollLeft);
      }
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
            <div className="work-gallery">
              <i
                ref={rightIconRef}
                onClick={() => btnClick("right")}
                className="symbol arrow-right"
              >
                arrow_forward
              </i>
              <i
                ref={leftIconRef}
                onClick={() => btnClick("left")}
                className="symbol arrow-left"
              >
                arrow_back
              </i>
              {galleryItems.map((item) => {
                return (
                  <GalleryItem src={item.src} id={item.id} key={item.id} />
                );
              })}
            </div>
          </div>
        </div>
        {/* <ImgContainer src={"/images/webpImages/brazos.webp"} /> */}
      </div>
    </section>
  );
};

export default PageTwo;
