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
          <Image
            src={"/IMG-9027.png"}
            width={200}
            height={180}
            alt={"/IMG-9027.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/IMG-9029.png"}
            width={200}
            height={180}
            alt={"/IMG-9029.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/IMG-9032.png"}
            width={200}
            height={180}
            alt={"/IMG-9032.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/IMG-9035.png"}
            width={200}
            height={180}
            alt={"/IMG-9035.png"}
            className={styles.image}
          />
        </div>
      </Carousel>
    </>
  );
}
