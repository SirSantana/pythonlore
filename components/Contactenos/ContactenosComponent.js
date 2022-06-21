import styles from "../Navbar/Navbar.module.css";
import styles1 from '../AcercaDe/AcercaDe.module.css'
import Image from 'next/image'
export default function ContactenosComponent(){
    return(
        <>
        <div className={styles1.container}>
        <div className={styles1.card}>
          <h2 style={{color:'#b97cf1'}}>Contactenos</h2>
          <h3>Si deseas escribirnos, nos encuentras en Instagram
          </h3>
          <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
          <Image
              alt={'/images/logoInstagram.png'} src={'/images/logoInstagram.png'} className={styles.img} width={50}height={35}
              />
              <a href="https://www.instagram.com/_python.co/?hl=es" target='_blank' rel="noreferrer"><h3>_python.co</h3></a>
          </div>
            <h3 style={{color:'#b97cf1'}}>Un gusto, Mrs.T y Mr.H</h3>
            
        </div>
        
      </div>
        </>
    )
}