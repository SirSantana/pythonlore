import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Carrousel() {


  return (
    <>
      
      <Carousel showArrows={true}  centerSlidePercentage={40} centerMode={true} showThumbs={false} autoPlay interval={3000} infiniteLoop={1}>
        <div style={{marginRight:'30px'}}>
          <img
            src={"/IMG-9027.png"}
            alt={"/IMG-9027.png"}
            className={styles.image}
          />
        </div>
        <div style={{marginRight:'30px'}}>
          <img
            src={"/IMG-9029.png"}
            alt={"/IMG-9029.png"}
            className={styles.image}
          />
        </div>
        <div style={{marginRight:'30px'}}>
          <img
            src={"/IMG-9032.png"}
            alt={"/IMG-9032.png"}
            className={styles.image}
          />
        </div>
        <div style={{marginRight:'30px'}}>
          <img
            src={"/IMG-9035.png"}
            alt={"/IMG-9035.png"}
            className={styles.image}
          />
        </div>
      </Carousel>
    </>
  );
}
