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
    threshold: 1,
  });
  const { index, setIndex } = useNavIndex();

  const [modalActive, setModalActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!modalActive && videoRef.current !== null) {
      videoRef.current.pause();
    }
  }, [modalActive]);

  useEffect(() => {
    if (inView) {
      console.log("#1 in view");
      setIndex(0);
    }
  }, [inView]);

  return (
    <section ref={ref} id="trabajo" className={"page-wrapper"}>
      <div className="page-container">
        <div className="content-container">
          <div className="element-container">
            <div className="text-container">
              <h3>Lorem ipsum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                mattis sem eget enim pretium, eget blandit velit accumsan.
                Vivamus efficitur augue diam.
              </p>
            </div>
          </div>
          <div className="element-container">
            <button onClick={() => setModalActive(true)} className="video-btn">
              <div className="video-btn-container">
                <h3>Reel</h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <ImgContainer src={"/images/webpImages/cara.webp"} />
        <div
          onClick={() => setModalActive(false)}
          className={
            modalActive
              ? "video-modal-container modal-active"
              : "video-modal-container"
          }
        >
          <video
            ref={videoRef}
            muted
            controls
            width={900}
            src="/videos/istock1.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default PageOne;
