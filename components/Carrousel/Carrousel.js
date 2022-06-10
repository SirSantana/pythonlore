import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import styles from "./Carousel.module.css";
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carrousel() {


  return (
    <>
      
      <Carousel showArrows={true} showThumbs={false} autoPlay  interval={3000}infiniteLoop={1}>
        <div style={{cursor:'pointer'}}>
          <Link href={"/productos/1234"}>
          <a>
          <Image
            src={"/images/collar cactus acero frambuesa.jpg"}
            width={300}
            height={280}
            alt={"/imgCar2.png"}
            className={styles.image}
          />
          </a>
          </Link>
          
        </div>
        <div style={{cursor:'pointer'}}>
          <Link href={"/productos/2328"}>
          <a>
          <Image
            src={"/images/collar dije dino acero frambuesa.jpg"}
            width={300}
            height={280}
            alt={"imgCar1.png"}
            className={styles.image}
          />
          </a>
          </Link>
          
        </div>
        <div style={{cursor:'pointer'}}>
          <Link href={"/productos/2131"}>
          <a>
          <Image
            src={"/images/collar osito verde acero frambuesa.jpg"}
            width={300}
            height={280}
            alt={"/imgCar.png"}
            className={styles.image}
          />
          </a>
          </Link>
          
        </div>
        <div style={{cursor:'pointer'}}>
          <Link href={"/productos/2323"}>
          <a>
          <Image
            src={"/images/collar palmera acero frambuesa.jpg"}
            width={300}
            height={280}
            alt={"imgCar3.png"}
            className={styles.image}
          />
          </a>
          </Link>
          
        </div>
        <div style={{cursor:'pointer'}}>
          <Link href={"/productos/2329"}>
          <a>
          <Image
            src={"/images/collar serpiente acero frambuesa.jpg"}
            width={300}
            height={280}
            alt={"imgCar3.png"}
            className={styles.image}
          />
          </a>
          </Link>
        </div>
      </Carousel>
    </>
  );
}
