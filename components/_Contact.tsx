"use client";

import { useLanguage, useNavIndex } from "@/contexts/ContextHooks";
import ImgContainer from "./ImgContainer";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import img from "@/assets/images/rostro.webp";
import Btn from "./Btn";
import Link from "next/link";

type PageFourProps = {
  index: number;
};

const PageFour = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });

  const { index, setIndex } = useNavIndex();

  const { language } = useLanguage();

  useEffect(() => {
    if (inView) {
      setIndex(3);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="contacto"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      <div className="page-container">
        <div className="contact-wrapper">
          <div className="contact-container">
            <div className="contact-heading">
              <h2>{language === "ES" ? "CONTACTO" : "CONTACT"}</h2>
              <h3>
                {language === "ES"
                  ? "Me encantaria trabajar contigo, por favor contactame."
                  : "I would love to work with you, please reach me out."}
              </h3>
            </div>
            <div className="contact-info-container">
              <div className="contact-info">
                <Btn>
                  <div className="btn-info">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#ffffff"
                      stroke="white"
                      strokeWidth={"1"}
                      viewBox="0 0 25 25"
                    >
                      <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                    </svg>
                    cra 8 este # 1a-72
                  </div>
                </Btn>
              </div>
              <div className="contact-info">
                <Btn>
                  <div className="btn-info">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#ffffff"
                      stroke="white"
                      strokeWidth={"1"}
                      viewBox="0 0 25 25"
                    >
                      <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
                    </svg>
                    +57 3132105286
                  </div>
                </Btn>
              </div>
              <div className="contact-info">
                <Btn>
                  <div className="btn-info">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="#ffffff"
                      stroke="white"
                      strokeWidth={"1"}
                      viewBox="0 0 25 25"
                    >
                      <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                    </svg>
                    francwow06@gmail.com
                  </div>
                </Btn>
              </div>
            </div>
          </div>
        </div>
        <ImgContainer src={img.src} prio={false} />
      </div>
    </section>
  );
};

export default PageFour;
