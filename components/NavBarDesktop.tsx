"use client";

import Link from "next/link";
import { montserrat } from "@/fonts/fonts";
import { useLanguage, useNavIndex } from "@/contexts/ContextHooks";
import Btn from "./Btn";
import { navItems } from "@/data/navItems";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBarDesktop = () => {
  const { index, setIndex } = useNavIndex();
  const { language } = useLanguage();

  return (
    <div className={`nav-wrapper nav-desktop ${montserrat.variable}`}>
      <div className="nav-container">
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((navItem) => {
              return (
                <Btn key={navItem.id}>
                  <Link
                    className={
                      index === navItem.id
                        ? "nav-list-item active"
                        : "nav-list-item"
                    }
                    onClick={() => setIndex(navItem.id)}
                    href={navItem.href}
                  >
                    <li>{language === "ES" ? navItem.es : navItem.en}</li>
                  </Link>
                </Btn>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBarDesktop;
