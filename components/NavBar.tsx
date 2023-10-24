"use client";

import Link from "next/link";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBar = ({ index, setIndex }: NavBarProps) => {
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-bar-container">
          <div
            style={
              index === 0
                ? { transform: "translate3d(0, 0, 0)" }
                : index === 1
                ? { transform: "translate3d(0, 100%, 0)" }
                : index === 2
                ? { transform: "translate3d(0, 200%, 0)" }
                : {}
            }
            className={"nav-stick"}
          ></div>
          <div className="nav-bar"></div>
        </div>
        <nav className="main-nav">
          <div
            style={
              index === 0
                ? { transform: "translate3d(0, 0, 0)" }
                : index === 1
                ? { transform: "translate3d(0, 100%, 0)" }
                : index === 2
                ? { transform: "translate3d(0, 200%, 0)" }
                : {}
            }
            className={"nav-modal"}
          ></div>
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
