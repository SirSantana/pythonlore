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
            src={"/images/imgCar2.png"}
            width={200}
            height={180}
            alt={"/imgCar2.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/images/imgCar1.png"}
            width={200}
            height={180}
            alt={"imgCar1.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/images/imgCar.png"}
            width={200}
            height={180}
            alt={"/imgCar.png"}
            className={styles.image}
          />
        </div>
        <div>
          <Image
            src={"/images/imgCar3.png"}
            width={200}
            height={180}
            alt={"imgCar3.png"}
            className={styles.image}
          />
        </div>
      </Carousel>
    </>
  );
}
