import React, { useEffect, useState } from "react";
import styles from "./Collections.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ape1 from "../../../../../Assets/Pngs/Apes/ape1.png";
import ape2 from "../../../../../Assets/Pngs/Apes/ape2.png";
import ape3 from "../../../../../Assets/Pngs/Apes/ape3.png";
import ape4 from "../../../../../Assets/Pngs/Apes/ape4.png";
import ape5 from "../../../../../Assets/Pngs/Apes/ape5.png";
import ape6 from "../../../../../Assets/Pngs/Apes/ape6.png";
import apeThumb from "../../../../../Assets/Pngs/Apes/apeThumb.png";
import patternImage from "../../../../../Assets/Pngs/Pattern.png";
import Avatar from "../Avatar/Avatar";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Collections() {
  const [collections, setCollections] = useState([
    { id: 1, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape1, thumb: apeThumb },
    { id: 2, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape2, thumb: apeThumb },
    { id: 3, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape3, thumb: apeThumb },
    { id: 4, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape4, thumb: apeThumb },
    { id: 5, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape5, thumb: apeThumb },
    { id: 6, name: "Knight", stars: 213, currentbid: "0.54 ETH", endTime: "12H 55m 2s", pic: ape6, thumb: apeThumb },
  ]);

  const [divRef, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1.3 } });
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className={styles.collectionText}>
        <h1>Collections</h1>
        <p>
          With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an
          ambitious ever-growing community with multiple benefits and utilities.
        </p>
      </motion.div>

      <motion.div
        ref={divRef}
        initial={{ opacity: 0 }}
        animate={controls}
        className={styles.collections}
      >
        {collections.map((collection) => (
          <div key={collection.id} className={styles.cardContainer}>
            <div className={styles.cardTop}>
              <Avatar />
              <span className={styles.name}>@{collection.name}</span>
              <span className={styles.stars}>⭐ {collection.stars}</span>
            </div>

            <div className={styles.apeImage}>
              <LazyLoadImage className={styles.lazyImage} src={collection.pic} effect='blur' alt='pic' />
            </div>

            <div className={styles.bid}>
              <div className={styles.currentBid}>
                <span>Current Bid</span>
                <span>{collection.currentbid}</span>
              </div>

              <div className={styles.endTime}>
                <span>Edning in</span>
                <span>{collection.endTime}</span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
