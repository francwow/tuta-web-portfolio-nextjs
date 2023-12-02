import Link from "next/link";
import Image from "next/image";

type GalleryItemProps = {
  src: string;
  id: number;
};

const GalleryItem = ({ src, id }: GalleryItemProps) => {
  return (
    // <Link className="work-gallery-item" data-index={id} href={"#"}>
    <div>
      <figure>
        <Image width={300} height={300} src={src} alt="portfolio project" />
      </figure>
    </div>

    // </Link>
  );
};

export default GalleryItem;
