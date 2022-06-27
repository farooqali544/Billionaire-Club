import React from "react";
import styles from "./MainView.module.css";
import ApeImage from "../../../../../Assets/Pngs/ape2.png";
import CircleImage from "../../../../../Assets/Pngs/circletemp.png";
import ElippseImage from "../../../../../Assets/Pngs/ellipse.png";
import Elippse2Image from "../../../../../Assets/Pngs/ellipse2.png";

import CustomButton from "../../../../Reusable/CustomButton/CustomButton";
import { motion } from "framer-motion";

export default function MainView() {
  const AnimatedH1 = (props) => {
    return (
      <motion.h1 {...props} initial={{ opacity: 0 }} transition = {{delay:0.5, duration:1}}  animate={{ opacity: 1 }}>
        {props.children}
      </motion.h1>
    );
  };

  const AnimatedSpan = (props) => {
    return (
      <motion.span {...props} initial={{ opacity: 0 }} transition = {{delay:0.5, duration:1}}  animate={{ opacity: 1 }}>
        {props.children}
      </motion.span>
    );
  };

  const AnimatedDiv = (props) => {
    return (
      <motion.div {...props} initial={{ opacity: 0 }} transition = {{delay:0.2, duration:1}}  animate={{ opacity: 1 }}>
        {props.children}
      </motion.div>
    );
  };

  return (
    <AnimatedDiv className={styles.mainView}>
      <div className={styles.imageWrapper}>
        <img className={styles.ape} src={ApeImage} alt='' />

        <img className={styles.circle} src={CircleImage} alt='' />
        {/* <img className={styles.ellipse} src={ElippseImage} alt='' /> */}
      </div>

      <div className={styles.exclusiveContentWrapper}>
        <div className={styles.exclusiveContent}>
          {/* Heading */}
          <div className={styles.exclusiveHeading}>
            <AnimatedH1>EXCLUSIVE</AnimatedH1>
            <AnimatedSpan>newest NFT release</AnimatedSpan>
          </div>

          {/* Content */}
          <div className={styles.exclusivePara}>
            <p>
              The <strong>BILLIONAIRE CLUB</strong> is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are
              stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
            </p>
            <span> Reveal on October 20th.</span>

            <img className={styles.ellipse2} src={Elippse2Image} alt='' />
          </div>

          <div className={styles.registerWrapper}>
            <input placeholder='your@email.com' type='text' />
            <CustomButton idStyle={styles.customButton}>Register</CustomButton>
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
}
