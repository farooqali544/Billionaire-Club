import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../../../../Assets/Pngs/logo.png";
import logoMobile from "../../../../../Assets/Pngs/logoMobile.png";
import twitterIcon from "../../../../../Assets/Pngs/twitter.png";
import discordIcon from "../../../../../Assets/Pngs/discord.png";
import instaIcon from "../../../../../Assets/Pngs/insta.png";
import patternImage from "../../../../../Assets/Pngs/Pattern.png";

export default function Footer() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => setScreenWidth(window.innerWidth);
  }, []);

  const Logo = () => {
    if (screenWidth <= 1000 && screenWidth>500) return <img src={logoMobile} alt='logo' />;

    return <img src={logo} alt='logo' />;
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.patternWrapper2}>
        <img src={patternImage} alt='' />
      </div> */}
      <div className={styles.logoTerms}>
        <Logo/>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
      </div>

      <div className={styles.socialIcons}>
        <span>
          <img src={twitterIcon} alt='' />
        </span>

        <span>
          <img src={discordIcon} alt='' />
        </span>

        <span>
          <img src={instaIcon} alt='' />
        </span>
      </div>
    </div>
  );
}
