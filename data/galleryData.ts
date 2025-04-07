import { StaticImageData } from "next/image";

// work section images
import img1 from "@/assets/images/work-gallery/boy-chair.webp";
import img2 from "@/assets/images/work-gallery/girl.webp";
import img3 from "@/assets/images/work-gallery/fragance.webp";

// eventos images
import eventos1 from "@/assets/images/work-gallery/eventos/eventos-1.webp";
import eventos2 from "@/assets/images/work-gallery/eventos/eventos-2.webp";
import eventos3 from "@/assets/images/work-gallery/eventos/eventos-3.webp";
import eventos4 from "@/assets/images/work-gallery/eventos/eventos-4.webp";
import eventos5 from "@/assets/images/work-gallery/eventos/eventos-5.webp";
import eventos6 from "@/assets/images/work-gallery/eventos/eventos-6.webp";
import eventos7 from "@/assets/images/work-gallery/eventos/eventos-7.webp";
import eventos8 from "@/assets/images/work-gallery/eventos/eventos-8.webp";

// fotografia images
import foto1 from "@/assets/images/work-gallery/fotografia/foto-1.webp";
import foto2 from "@/assets/images/work-gallery/fotografia/foto-2.webp";
import foto3 from "@/assets/images/work-gallery/fotografia/foto-3.webp";
import foto4 from "@/assets/images/work-gallery/fotografia/foto-4.webp";
import foto5 from "@/assets/images/work-gallery/fotografia/foto-5.webp";
import foto6 from "@/assets/images/work-gallery/fotografia/foto-6.webp";
import foto7 from "@/assets/images/work-gallery/fotografia/foto-7.webp";

export type VideoReel = {
  type: "video";
  src: string;
};

export type ImgReel = {
  type: "img";
  src: StaticImageData[] | string[];
};

export type Item = {
  id: number;
  src: string;
  reel: ImgReel | VideoReel;
  nameES: string;
  nameEN: string;
};
// | {
//     id: number;
//     src: string;
//     reel: VideoReel;
//     nameES: string;
//     nameEN: string;
//   };

export const galleryItems: Item[] = [
  {
    id: 0,
    src: img1.src,
    reel: {
      type: "img",
      src: [
        eventos1,
        eventos2,
        eventos3,
        eventos4,
        eventos5,
        eventos6,
        eventos7,
        eventos8,
      ],
    },
    nameES: "Eventos",
    nameEN: "Events",
  },
  {
    id: 1,
    src: img2.src,
    reel: {
      type: "img",
      src: [foto1, foto2, foto3, foto4, foto5, foto6, foto7],
    },
    nameES: "Fotografía",
    nameEN: "Photograhpy",
  },
  {
    id: 2,
    src: img3.src,
    reel: { type: "video", src: "./videos/opzione-1.mp4" },
    nameES: "Video",
    nameEN: "Video",
  },
  // {
  //   id: 3,
  //   src: img4.src,
  //   reel: img8.src,
  // },
  // {
  //   id: 4,
  //   src: img5.src,
  //   reel: img8.src,
  // },
  // {
  //   id: 5,
  //   src: img6.src,
  //   reel: img8.src,
  // },
  // {
  //   id: 6,
  //   src: img7.src,
  //   reel: img8.src,
  // },
  // {
  //   id: 7,
  //   src: img8.src,
  //   reel: img8.src,
  // },
];
