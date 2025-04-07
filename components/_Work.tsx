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

const PageTwo = () => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [modal, setModalActive] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();

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
      <div
        ref={pageRef}
        className={modal ? "page-container modal-active" : "page-container"}
      >
        <div ref={containerRef} className="content-container">
          <div ref={galleryRef} className="work-gallery-wrapper">
            <div className="work-gallery">
              {galleryItems.map((item, index) => {
                return (
                  <GalleryItem
                    modal={modal}
                    setModalActive={setModalActive}
                    item={item}
                    key={item.id}
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
