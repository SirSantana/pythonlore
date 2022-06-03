import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Carrousel() {


  return (
    <>
      
      <Carousel showArrows={true} centerSlidePercentage={60} centerMode={true} showThumbs={false} autoPlay  interval={3000}infiniteLoop={1}>
        <div >
          <img
            src={"/images/IMG-9027.png"}
            alt={"/images/IMG-9027.png"}
            className={styles.image}
          />
        </div>
        <div>
          <img
            src={"/images/IMG-9029.png"}
            alt={"/images/IMG-9029.png"}
            className={styles.image}
          />
        </div>
        <div>
          <img
            src={"/images/IMG-9032.png"}
            alt={"/images/IMG-9032.png"}
            className={styles.image}
          />
        </div>
        <div>
          <img
            src={"/images/IMG-9035.png"}
            alt={"/images/IMG-9035.png"}
            className={styles.image}
          />
        </div>
      </Carousel>
    </>
  );
}
