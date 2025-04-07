"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { useLanguage } from "@/contexts/ContextHooks";
import { VideoReel, ImgReel, Item } from "@/data/galleryData";
import { GalleryReel } from "@/types/Types";

type GalleryItemProps = {
  item: Item;
  key: number;
  modal: boolean;
  setModalActive: (modal: boolean) => void;
};

const GalleryItem = ({ item, modal, setModalActive }: GalleryItemProps) => {
  const galleryBtnRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [galleryReel, setGalleryReel] = useState<GalleryReel | null>(null);
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    if (galleryReel) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [galleryReel]);

  const arrowHandle = (direction: "left" | "right") => {
    if (direction === "left") {
      if (imgActive === 0) {
        return;
      } else if (imgActive > 0) {
        setImgActive(imgActive - 1);
      }
    } else if (direction === "right") {
      if (galleryReel) {
        if (imgActive < galleryReel.reel.length - 1) {
          setImgActive(imgActive + 1);
        } else if (imgActive >= item.src.length - 1) {
          return;
        }
      }
    }
  };

  return (
    <>
      <Btn>
        <div
          ref={galleryBtnRef}
          onClick={() => {
            setGalleryReel({ reel: item.reel.src });
            setModalActive(true);
          }}
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
                priority
              />
            </div>
          </figure>
        </div>
      </Btn>
      {galleryReel ? (
        <div
          className={
            galleryReel
              ? "work-reel-container active"
              : "work-reel-container not-active"
          }
        >
          <div
            onClick={() => {
              setGalleryReel(null);
              setImgActive(0);
              setModalActive(false);
            }}
            className="modal-close-container"
          >
            <Btn>
              <div className="modal-close"></div>
            </Btn>
          </div>

          {/* <div className="line"></div> */}

          <div className="work-reel">
            {item.reel.type === "video" ? (
              <video
                muted
                loop
                autoPlay
                width={1300}
                src={item.reel.src}
              ></video>
            ) : (
              <div className="img-reel-container">
                <div
                  onClick={() => arrowHandle("left")}
                  className="arrow-container"
                >
                  <Btn>
                    <div className="arrow-left"></div>
                  </Btn>
                </div>

                <div
                  onClick={() => arrowHandle("right")}
                  className="arrow-container"
                >
                  <Btn>
                    <div className="arrow-right"></div>
                  </Btn>
                </div>

                {item.reel.src.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        index === imgActive ? "reel-img active" : "reel-img"
                      }
                    >
                      <Image
                        src={item}
                        alt="image from reel"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default GalleryItem;
