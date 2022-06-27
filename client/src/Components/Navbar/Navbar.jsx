import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Assets/Pngs/logo.png";
import logoMobile from "../../Assets/Pngs/logoMobile.png";
import { ReactComponent as PolygonSvg } from "../../Assets/Svgs/Polygon.svg";
import { ReactComponent as MenuBarSvg } from "../../Assets/Svgs/menubar.svg";
import CustomButton from "../Reusable/CustomButton/CustomButton";
import Sidebar from "./Sidebar/Sidebar";

const links = ["Home", "Features", "Roadmap", "Team"];
export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const Logo = () => {
    if (screenWidth <= 800) return <img src={logoMobile} alt='Logo' />;

    return <img src={logo} alt='Logo' />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.linksWrapper}>
          <ul className={styles.links}>
            {links.map((link) => (
              <>
                <li
                  id={activeLink === link ? styles.active : ""}
                  onClick={() => {
                    setActiveLink(link);
                  }}
                >
                  {link}
                  <span className={styles.polygonWrapper}>{activeLink === link && <PolygonSvg />}</span>
                </li>
              </>
            ))}

            <div className={styles.buttonWrapper}>
              <CustomButton>Join Our Discord</CustomButton>
            </div>
          </ul>
        </div>

        <div
          className={styles.menuBarWrapper}
          id={menuOpen ? styles.menuBarWrapperActive : ""}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuBarSvg />
        </div>

        <Sidebar sidebarOpen={menuOpen} setSidebarOpen={setMenuOpen}>
          {links.map((link) => (
            <li
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(link);
              }}
              key={link}
              className={activeLink === link ? styles.activeMobileLink : ""}
            >
              {link}
            </li>
          ))}
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
            className={styles.buttonWrapper}
          >
            <CustomButton>Join Our Discord</CustomButton>
          </div>
        </Sidebar>
      </div>
    </div>
  );
}
