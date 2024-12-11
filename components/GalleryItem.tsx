"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Btn from "./Btn";

type GalleryItemProps = {
  src: string;
  id: number;
  index: number;
};

const GalleryItem = ({ src, id, index }: GalleryItemProps) => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const [hovering, setHovering] = useState(false);

  return (
    <Btn>
      <div
        className={"work-gallery-item"}
        data-index={id}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={hovering ? { zIndex: "99" } : { zIndex: `${index}` }}
      >
        <figure>
          <div className="gallery-img-container">
            <Image
              width={300}
              height={300}
              src={src}
              priority
              alt="portfolio project"
            />
          </div>
        </figure>
      </div>
    </Btn>
  );
};

export default GalleryItem;
