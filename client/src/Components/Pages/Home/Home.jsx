import React, { lazy, Suspense } from "react";
import styles from "./Home.module.css";
import Collections from "./SubComponents/Collections/Collections";
import Footer from "./SubComponents/Footer/Footer";
import GoldenTicket from "./SubComponents/GoldenTicket/GoldenTicket";
import MainView from "./SubComponents/MainView/MainView";

// const Collections = lazy(() => import("./SubComponents/Collections/Collections"));
// const GoldenTicket = lazy(() => import("./SubComponents/GoldenTicket/GoldenTicket"));

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <MainView />
      
          <Collections />
        

          <GoldenTicket />
       
        <div className={styles.getAped}>
          <h2>Get Aped with Us!</h2>
          <p>Sign up for our newsletter</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
