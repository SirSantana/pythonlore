import { ImagesData } from "./ImagesData";
import Image from 'next/image'
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from './Carousel.module.css'
export default function Carrousel({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    
    const arrowLeft=()=>{
        setCurrent(current === 0 ? length - 1: current - 1)

    }
    const arrowRight=()=>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    if(!Array.isArray(slides) || slides.length <=0){
        return null
    }
  return (
    <>
    <section className={styles.slider}>
    <FaArrowAltCircleLeft className={styles.arrowLeft}onClick={arrowLeft}/>
    <FaArrowAltCircleRight className={styles.arrowRight} onClick={arrowRight}/>

     {ImagesData.map((slide, index)=>{
         return(
             <div className={index === current ? 'slide active': 'slide'} key={index}>
             {index === current && (<Image src={slide.image} width={200} height={180} alt={index}  className={styles.image}/>)}
             

             </div>
         )
     })}


    </section>

    </>
  );
}
