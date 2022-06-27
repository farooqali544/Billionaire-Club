import React from "react";
import CustomButton from "../../../../Reusable/CustomButton/CustomButton";
import styles from "./GoldenTicket.module.css";
import goldenTicketImage from "../../../../../Assets/Pngs/GoldenTicket.png";
import CustomButton2 from "../../../../Reusable/CustomButton2/CustomButton2";

export default function GoldenTicket() {
  return (
    <div className={styles.container}>
      <div>
        <h2>The Golden Guests</h2>
        <p>
          The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the
          regular collection.
        </p>
        <CustomButton2>Join us to register for the Presale</CustomButton2>
      </div>
      <div className={styles.goldenImage}>
          <img  src={goldenTicketImage} alt="" />
      </div>
    </div>
  );
}
