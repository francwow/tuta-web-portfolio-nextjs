"use client";

import Link from "next/link";
import { montserrat } from "@/fonts/fonts";
import { useLanguage, useNavIndex } from "@/contexts/ContextHooks";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBarMobile = () => {
  const { index, setIndex } = useNavIndex();
  const { language } = useLanguage();

  return (
    <div className={`nav-wrapper nav-mobile ${montserrat.variable}`}>
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="nav-list">
            <Link
              className={index === 0 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(0)}
              href={"#inicio"}
            >
              <li>{language === "ES" ? "Inicio" : "Home"}</li>
            </Link>
            <Link
              className={index === 1 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(1)}
              href={"#trabajo"}
            >
              <li>{language === "ES" ? "Trabajo" : "Work"}</li>
            </Link>
            <Link
              className={index === 2 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(2)}
              href={"#acerca"}
            >
              <li>{language === "ES" ? "Acerca" : "About"}</li>
            </Link>
            <Link
              className={index === 3 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(3)}
              href={"#contacto"}
            >
              <li>{language === "ES" ? "Contacto" : "Contact"}</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarMobile;
