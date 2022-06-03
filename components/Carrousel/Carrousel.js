import Image from 'next/image'
import {useState, useEffect} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import styles from './Carousel.module.css'


export default function Carrousel() {
    const ImagesData=[
        {
            image:'/images/IMG-9027.png'
        },
        {
            image:'/images/IMG-9029.png'
    
        },
        {
            image:'/images/IMG-9032.png'
    
        },
        {
            image:'/images/IMG-9035.png'
    
        }
    ]
    const [current, setCurrent] = useState(0)
    const length = ImagesData?.length

    
    const arrowLeft=()=>{
        setCurrent(current === 0 ? length - 1: current - 1)

    }
    const arrowRight=()=>{
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    
    useEffect(()=>{

    },[current])
    
  return (
    <>
    <section className={styles.slider}>
    <FaArrowAltCircleLeft className={styles.arrowLeft}onClick={arrowLeft}/>
    <FaArrowAltCircleRight className={styles.arrowRight} onClick={arrowRight}/>
     {ImagesData?.map((slide, index)=>{
         return(
             <div className={index === current ? 'slide active': 'slide'} key={index}>
             {index === current 
             && 
             (<Image src={slide.image} width={200} height={180} alt={index}  className={styles.image}/>)}
             </div>
         )
     })}


    </section>

    </>
  );
}
