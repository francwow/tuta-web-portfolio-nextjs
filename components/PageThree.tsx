"use client";

import { useNavIndex } from "@/contexts/ContextHooks";
import ImgContainer from "./ImgContainer";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { galleryItems } from "@/data/galleryData";
import img from "@/assets/images/brazos.webp";

type PageThree = {
  index: number;
};

const PageThree = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  const { index, setIndex } = useNavIndex();
  const [val, setVal] = useState<number>(0);

  useEffect(() => {
    function increaseVal() {
      if (val < galleryItems.length - 1) {
        setVal(val + 1);
      } else {
        setVal(0);
      }
    }

    const startCarousel = setInterval(() => {
      increaseVal();
    }, 500);

    return () => clearInterval(startCarousel);
  }, [val]);

  useEffect(() => {
    if (inView) {
      console.log("#3 in view", index);
      setIndex(2);
    }
  }, [inView, index]);

  return (
    <section
      ref={ref}
      id="acerca"
      className={inView ? "page-wrapper active" : "page-wrapper"}
    >
      <div className="page-container">
        <div className="about-container">
          <div className="element-container">
            <div className="about-images">
              {galleryItems.map((item, index) => {
                return (
                  <div
                    data-active={val === item.id ? "true" : "false"}
                    className="about-img-container"
                    key={item.id}
                  >
                    <Image
                      src={item.src}
                      width={900}
                      height={900}
                      priority
                      alt="portfolio project"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="element-container about-info">
            <p>
              Soy un filmmaker apasionado por transformar ideas en narrativas
              visuales impactantes. Mi experiencia abarca desde la concepción
              inicial hasta la postproducción, incluyendo la creación de efectos
              3D y fotografía. Me especializo en la producción de videos para
              redes sociales y comunicación corporativa, tanto interna como
              externa.
            </p>
            <br />
            <p>
              Mi objetivo es ayudar a empresas y emprendedores a comunicar sus
              ideas de manera efectiva, ya sea para lanzar proyectos
              prometedores o consolidar negocios establecidos. Cada proyecto es
              una oportunidad para crear contenido que inspire, conecte y marque
              la diferencia.
            </p>
            <ImgContainer src={img.src} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageThree;
