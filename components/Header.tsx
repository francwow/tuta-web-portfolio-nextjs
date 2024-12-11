import Link from "next/link";
import NavBar from "./NavBarDesktop";
import { montserrat } from "@/fonts/fonts";
import Btn from "./Btn";
import Languages from "./Languages";

type HeaderProps = {
  index: number;
  setIndex: (index: number) => void;
};

const Header = () => {
  return (
    <div className={`header-container ${montserrat.variable}`}>
      <div className="header">
        <Btn>
          <div className="logo-container">
            <h2 className="text-white logo ">
              <Link href={"#"}>
                <span>D</span>
                <span>a</span>
                <span>v</span>
                <span>i</span>
                <span>d</span>
                <span> </span>
                <span>T</span>
                <span>u</span>
                <span>t</span>
                <span>a</span>
                {/* David Tuta */}
              </Link>
            </h2>
          </div>
        </Btn>

        <Languages device={"mobile"} />
        <div className="header-options">
          <NavBar />
          <Languages device={"desktop"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
