"use client";

import { useRef, useEffect } from "react";

type HeaderProps = {
  index: number;
  setIndex: (index: number) => void;
};

const Header = ({ index, setIndex }: HeaderProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (btnRef?.current?.focus()) {
  //     btnRef.current.blur();
  //   }
  // }, [index]);

  return (
    <div className="header-container w-full fixed z-[999] top-0 right-0 left-0">
      <div className="header flex justify-start items-center">
        <div className="logo-container">
          <h2 className="text-white logo">
            <button onClick={() => setIndex(0)} tabIndex={1}>
              David Tuta
            </button>
          </h2>
        </div>
        {/* <div className="nav-container">
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <button ref={btnRef} onClick={() => setIndex(0)} tabIndex={1}>
                  Trabajo
                </button>
              </li>
              <li className="nav-list-item">
                <button onClick={() => setIndex(1)} tabIndex={2}>
                  Acerca
                </button>
              </li>
              <li className="nav-list-item">
                <button onClick={() => setIndex(2)} tabIndex={3}>
                  Contacto
                </button>
              </li>
            </ul>
          </nav>
        </div> */}
      </div>
    </div>
  );
};

export default Header;