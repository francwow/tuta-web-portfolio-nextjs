"use client";

import useNavIndex from "@/contexts/NavContext";
import ImgContainer from "./ImgContainer";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
import { galleryItems } from "@/data/galleryData";
import GalleryItem from "./GalleryItem";

type PageTwo = {
  index: number;
};

const PageTwo = () => {
  // const [translateX, setTranslateX] = useState(0);
  const deskTop = useMediaQuery("(min-width: 991px)");
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLElement>(null);
  const rightIconRef = useRef<HTMLElement>(null);

  let dragStart = false;
  let isDragging = false;
  let prevPagex: any;
  let prevScrollLeft: any;
  let positionDiff: any;

  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (inView) {
      console.log("#2 in view", index);
      setIndex(1);
    }
  }, [inView, index]);

  const autoSlide = () => {
    if (galleryRef.current !== null) {
      // if there is no img left to scroll then return
      if (
        galleryRef.current.scrollLeft ==
          galleryRef.current.scrollWidth - galleryRef.current.clientWidth ||
        galleryRef.current.scrollLeft == 0
      )
        return;

      galleryRef.current.style.scrollBehavior = "smooth";
      positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
      let imgWidth = 270 + vw(5) + 14;
      // getting difference value that needs to add or reduce from carousel left to take middle img center
      let valDiff = imgWidth - positionDiff;

      if (galleryRef.current.scrollLeft > prevScrollLeft) {
        // user is scrolling to the right
        return (galleryRef.current.scrollLeft +=
          positionDiff > imgWidth / 3 ? valDiff : -positionDiff);
      }
      // user is scrolling to the left
      galleryRef.current.scrollLeft -=
        positionDiff > imgWidth / 3 ? valDiff : -positionDiff;
    }
  };

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
      galleryRef.current.classList.remove("dragging");
    }
    if (containerRef.current !== null) {
      containerRef.current.style.cursor = "grab";
    }

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  const dragging = (e: any) => {
    if (!dragStart) return;
    e.preventDefault();
    isDragging = true;
    if (galleryRef.current !== null) {
      galleryRef.current.classList.add("dragging");
      positionDiff = e.clientX - prevPagex;
      // console.log(positionDiff, "diff");
      // console.log(galleryRef.current.scrollLeft);
      galleryRef.current.scrollLeft = prevScrollLeft - positionDiff;
    }

    if (deskTop) {
      showHideIcon();
    } else {
      return;
    }
  };

  function vw(percent: number) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (percent * w) / 100;
  }

  const showHideIcon = () => {
    // showing/hiding arrows according to gallery scroll left value
    if (leftIconRef.current !== null && galleryRef.current !== null) {
      leftIconRef.current.style.opacity =
        galleryRef.current.scrollLeft == 0 ? "0.5" : "1";
    }
    if (rightIconRef.current !== null && galleryRef.current !== null) {
      // max scrollable width of the gallery
      let maxScrollLeft =
        galleryRef.current.scrollWidth - galleryRef.current.clientWidth;
      rightIconRef.current.style.opacity =
        galleryRef.current.scrollLeft == maxScrollLeft ? "0.5" : "1";
    }
  };

  const btnClick = (dir: string) => {
    if (galleryRef.current !== null) {
      if (dir === "right") {
        galleryRef.current.style.scrollBehavior = "smooth";
        galleryRef.current.scrollLeft += 270 + vw(5);
      } else if (dir === "left") {
        galleryRef.current.style.scrollBehavior = "smooth";
        galleryRef.current.scrollLeft += -(270 + vw(5));
      }
    }

    if (deskTop) {
      setTimeout(() => showHideIcon(), 60);
    } else {
      return;
    }
  };

  return (
    <section
      ref={ref}
      id="trabajo"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
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
              {galleryItems.map((item, index) => {
                return (
                  <GalleryItem
                    index={index}
                    src={item.src}
                    id={item.id}
                    key={item.id}
                  />
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
