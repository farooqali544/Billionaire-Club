import React from "react";
import styles from "./CustomButton2.module.css";

export default function CustomButton({ children }) {
  return <button className={styles.button}>{children}</button>;
}
