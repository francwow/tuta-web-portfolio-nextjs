"use client";

import Link from "next/link";
import { montserrat } from "@/fonts/fonts";
import useNavIndex from "@/contexts/NavContext";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBar = () => {
  const { index, setIndex } = useNavIndex();

  return (
    <div className={`nav-wrapper ${montserrat.variable}`}>
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="nav-list">
            <Link onClick={() => setIndex(0)} href={"#trabajo"}>
              <li className="nav-list-item">Trabajo</li>
            </Link>
            <Link onClick={() => setIndex(1)} href={"#acerca"}>
              <li className="nav-list-item">Acerca</li>
            </Link>
            <Link onClick={() => setIndex(2)} href={"#contacto"}>
              <li className="nav-list-item">Contacto</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
