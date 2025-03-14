"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { useLanguage } from "@/contexts/ContextHooks";

type Item = {
  id: number;
  src: string;
  reel: string;
  nameES: string;
  nameEN: string;
};

type GalleryReel = {
  reel: string;
};

type GalleryItemProps = {
  item: Item;
  setGalleryReel: (galleryReel: GalleryReel) => void;
  key: number;
};

const GalleryItem = ({ item, setGalleryReel }: GalleryItemProps) => {
  const galleryBtnRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  return (
    <Btn>
      <div
        ref={galleryBtnRef}
        onMouseDown={(e) => {
          console.log("clicked");
        }}
        onMouseUp={(e) => {
          console.log("unclicked");
        }}
        // onClick={() => {
        //   setGalleryReel({ reel: item.reel });
        // }}
        className={"work-gallery-item"}
        data-index={item.id}
      >
        <span>{language === "ES" ? item.nameES : item.nameEN}</span>
        <figure>
          <div className="gallery-img-container">
            <Image
              width={900}
              height={900}
              src={item.src}
              alt="portfolio project"
            />
          </div>
        </figure>
      </div>
    </Btn>
  );
};

export default GalleryItem;
