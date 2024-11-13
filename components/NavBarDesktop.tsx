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
            <Link onClick={() => setIndex(0)} href={"#inicio"}>
              <li
                className={
                  index === 0 ? "nav-list-item active" : "nav-list-item"
                }
              >
                Inicio
              </li>
            </Link>
            <Link onClick={() => setIndex(1)} href={"#trabajo"}>
              <li
                className={
                  index === 1 ? "nav-list-item active" : "nav-list-item"
                }
              >
                Trabajo
              </li>
            </Link>
            <Link onClick={() => setIndex(2)} href={"#acerca"}>
              <li
                className={
                  index === 2 ? "nav-list-item active" : "nav-list-item"
                }
              >
                Acerca
              </li>
            </Link>
            <Link onClick={() => setIndex(3)} href={"#contacto"}>
              <li
                className={
                  index === 3 ? "nav-list-item active" : "nav-list-item"
                }
              >
                Contacto
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarDesktop;
