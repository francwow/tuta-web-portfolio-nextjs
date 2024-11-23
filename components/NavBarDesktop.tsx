"use client";

import Link from "next/link";
import { montserrat } from "@/fonts/fonts";
import useNavIndex from "@/contexts/NavContext";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBarDesktop = () => {
  const { index, setIndex } = useNavIndex();

  return (
    <div className={`nav-wrapper nav-desktop ${montserrat.variable}`}>
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="nav-list">
            <Link
              className={index === 0 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(0)}
              href={"#inicio"}
            >
              <li>Inicio</li>
            </Link>
            <Link
              className={index === 1 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(1)}
              href={"#trabajo"}
            >
              <li>Trabajo</li>
            </Link>
            <Link
              className={index === 2 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(2)}
              href={"#acerca"}
            >
              <li>Acerca</li>
            </Link>
            <Link
              className={index === 3 ? "nav-list-item active" : "nav-list-item"}
              onClick={() => setIndex(3)}
              href={"#contacto"}
            >
              <li>Contacto</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarDesktop;
