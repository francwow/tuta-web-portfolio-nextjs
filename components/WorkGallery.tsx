import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

const WorkGallery = () => {
  return (
    <div className="work-gallery">
      <ArrowIcon icon={"arrow_forward"} className="arrow-right" />
      <ArrowIcon icon={"arrow_back"} className="arrow-left" />
      <Link className="work-gallery-item" data-index={0} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={1} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={2} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={3} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={4} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={5} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={6} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
      <Link className="work-gallery-item" data-index={7} href={"#"}>
        <figure>
          <Image
            width={300}
            height={300}
            src={"/images/webpImages/girl.webp"}
            alt=""
          />
        </figure>
      </Link>
    </div>
  );
};

export default WorkGallery;
