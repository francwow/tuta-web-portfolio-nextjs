"use client";

import Image from "next/image";
import ImgContainer from "./ImgContainer";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import useNavIndex from "@/contexts/NavContext";

type PageOneProps = {
  index: number;
};

const PageOne = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();

  const [infoActive, setInfoActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!modalActive && videoRef.current !== null) {
      videoRef.current.pause();
    }
  }, [modalActive]);

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
            onMouseEnter={() => setInfoActive(true)}
            onMouseLeave={() => setInfoActive(false)}
            className={
              infoActive
                ? "element-container inicio-info-info active"
                : modalActive
                ? "element-container inicio-info-info not-active"
                : "element-container inicio-info-info"
            }
          >
            <div className="modal">
              <h1>Info</h1>
            </div>
            {/* <div className="text-container">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                mattis sem eget enim pretium, eget blandit velit accumsan.
                Vivamus efficitur augue diam.
              </p>
            </div> */}
          </div>
          <div
            onMouseEnter={() => {
              setModalActive(true);
              videoRef.current?.play();
            }}
            onMouseLeave={() => {
              setModalActive(false);
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
              }
            }}
            className={
              infoActive
                ? "element-container inicio-info-reel not-active"
                : modalActive
                ? "element-container inicio-info-reel active"
                : "element-container inicio-info-reel"
            }
          >
            <div
              className={
                modalActive
                  ? "video-modal-container modal-active"
                  : "video-modal-container modal-not-active"
              }
            >
              <div
                onClick={() => {
                  if (videoRef.current) {
                    if (videoRef.current.paused === true) {
                      videoRef.current.play();
                    } else if (videoRef.current.paused === false) {
                      videoRef.current.pause();
                    }
                  }
                }}
                className="modal"
              >
                <h1>Ver Reel</h1>
              </div>
              <video
                ref={videoRef}
                muted
                loop
                width={1300}
                src="/videos/istock1.mp4"
              ></video>
            </div>
            {/* <button
              onClick={() => {
                setModalActive(true);
                videoRef.current?.play();
              }}
              className="main-btn video-btn"
            >
              <div className="video-btn-container">
                <span>Reel</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
              </div>
            </button> */}
          </div>
        </div>

        <ImgContainer src={"/images/webpImages/cara.webp"} />
      </div>
    </section>
  );
};

export default PageOne;
