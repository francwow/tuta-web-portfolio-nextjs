"use client";

type NavBarProps = {
  index: number;
  setIndex: (index: number) => void;
};

const NavBar = ({ index, setIndex }: NavBarProps) => {
  return (
    <div className="nav-wrapper">
      <div className="nav-bar-container">
        <div
          className={
            index === 0
              ? "position-1 nav-stick"
              : index === 1
              ? "position-2 nav-stick"
              : index === 2
              ? "position-3 nav-stick"
              : ""
          }
        ></div>
        <div className="nav-bar"></div>
      </div>
      <div className="nav-container">
        <div
          className={
            index === 0
              ? "position-1 nav-modal"
              : index === 1
              ? "position-2 nav-modal"
              : index === 2
              ? "position-3 nav-modal"
              : ""
          }
        ></div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-list-item">
              <button onClick={() => setIndex(0)} tabIndex={1}>
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
      </div>
    </div>
  );
};

export default NavBar;
