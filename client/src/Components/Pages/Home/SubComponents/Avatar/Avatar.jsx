import React from 'react'
import styles from "./Avatar.module.css";
import ape1 from "../../../../../Assets/Pngs/Apes/ape1.png";
export default function Avatar() {
  return (
    <div className={styles.avatar}>
        <img src={ape1} alt="" />
    </div>
  )
}
