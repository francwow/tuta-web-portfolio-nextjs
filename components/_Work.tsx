"use client";

import { useNavIndex, usePointer } from "@/contexts/ContextHooks";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { useInView } from "react-intersection-observer";
import { galleryItems } from "@/data/galleryData";
import GalleryItem from "./GalleryItem";
import Btn from "./Btn";

type PageTwo = {
  index: number;
};

type GalleryReel = {
  reel: string;
};

const PageTwo = () => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [galleryReel, setGalleryReel] = useState<GalleryReel | null>(null);

  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();

  useEffect(() => {
    if (galleryReel) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [galleryReel]);

  useEffect(() => {
    if (inView) {
      setIndex(1);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="trabajo"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      {galleryReel ? (
        <div
          className={
            galleryReel
              ? "work-reel-container active"
              : "work-reel-container not-active"
          }
        >
          <Btn>
            <div onClick={() => setGalleryReel(null)}>X</div>
          </Btn>
          <div className="work-reel">
            <video
              muted
              loop
              autoPlay
              width={1300}
              src="/videos/opzione-1.mp4"
            ></video>
          </div>
        </div>
      ) : null}
      <div className="page-container">
        <div ref={containerRef} className="content-container">
          <div ref={galleryRef} className="work-gallery-wrapper">
            <div className="work-gallery">
              {galleryItems.map((item, index) => {
                return (
                  <GalleryItem
                    item={item}
                    key={item.id}
                    setGalleryReel={setGalleryReel}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTwo;
