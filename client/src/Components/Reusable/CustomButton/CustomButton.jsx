import React from "react";
import styles from "./CustomButton.module.css";

export default function CustomButton({children, idStyle}) {
  return <button id={idStyle}  className={styles.button}>{children}</button>;
}
