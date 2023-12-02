"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

type GalleryItemProps = {
  src: string;
  id: number;
  index: number;
};

const GalleryItem = ({ src, id, index }: GalleryItemProps) => {
  const deskTop = useMediaQuery("(min-width: 991px)");
  const [hovering, setHovering] = useState(false);

  return (
    // <Link className="work-gallery-item" data-index={id} href={"#"}>
    <div
      className={"work-gallery-item"}
      data-index={id}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={hovering ? { zIndex: "99" } : { zIndex: `${index}` }}
    >
      <figure>
        <Image width={300} height={300} src={src} alt="portfolio project" />
      </figure>
    </div>

    // </Link>
  );
};

export default GalleryItem;
