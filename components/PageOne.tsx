"use client";

import Image from "next/image";
import ImgContainer from "./ImgContainer";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useNavIndex from "@/contexts/NavContext";
import img1 from "../assets/images/cara.webp";
import img2 from "../assets/images/landscape.webp";

type PageOneProps = {
  index: number;
};

const PageOne = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();

  const [infoActive, setInfoActive] = useState(false);
  const [reelActive, setReelActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!reelActive && videoRef.current !== null) {
      videoRef.current.pause();
    }
  }, [reelActive]);

  useEffect(() => {
    if (inView) {
      console.log("#1 in view", index);
      setIndex(0);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="inicio"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      <div className="page-container">
        <div className="content-container inicio-info">
          <div
            onMouseEnter={() => {
              setReelActive(true);
              videoRef.current?.play();
            }}
            onMouseLeave={() => {
              setReelActive(false);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
            onPointerDown={() => {
              setReelActive(true);
              videoRef.current?.play();
            }}
            className={
              infoActive
                ? "element-container inicio-info-reel not-active"
                : reelActive
                ? "element-container inicio-info-reel active"
                : "element-container inicio-info-reel"
            }
          >
            <div
              className={
                reelActive
                  ? "video-modal-container modal-active"
                  : "video-modal-container modal-not-active"
              }
            >
              {/* <div className="inicio-bg">
                <Image src={img2} width={2000} height={2000} priority alt="" />
              </div> */}
              <div className="modal">
                <span>Ver Reel</span>
              </div>
              <video
                ref={videoRef}
                muted
                loop
                width={1300}
                src="/videos/istock1.mp4"
              ></video>
            </div>
          </div>
          <div
            onMouseEnter={() => setInfoActive(true)}
            onMouseLeave={() => setInfoActive(false)}
            onPointerDown={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
            className={
              infoActive
                ? "element-container inicio-info-info active"
                : reelActive
                ? "element-container inicio-info-info not-active"
                : "element-container inicio-info-info"
            }
          >
            {/* <div className="inicio-bg">
              <Image src={img1} width={2000} height={2000} priority alt="" />
            </div> */}
            <div className="modal">
              <span>Info</span>
            </div>
            <div className="inicio-info-text">
              <div className="text-container">
                <h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mattis sem eget enim pretium.
                </h2>
              </div>
            </div>
            <ImgContainer src={"/images/webpImages/cara.webp"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageOne;
