
import Link from 'next/link'
import styles from './Navbar.module.css'
export default function Navbar(){
    return(
        <>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
            
            <Link href={'/productos'}><a><button className={styles.button}>Productos</button></a></Link>
            <Link href={'/contactenos'}><a><button className={styles.button}>Contactenos</button></a></Link>
            <Link href={'/comoCompro'}><a><button className={styles.button} style={{padding:0}}>¿Cómo compro?</button></a></Link>
            <Link href={'/acercade'}><a><button className={styles.button}>Acerca De</button></a></Link>


        </div>
        </>
    )
}