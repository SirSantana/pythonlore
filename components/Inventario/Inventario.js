import LogoInicio from "../LogoInicio/LogoInicio";
import styles from "./Inventario.module.css";
import { IoIosCart } from "react-icons/io";
import styles1 from '../Navbar/Navbar.module.css'
import Image from 'next/image'
export default function Inventario({ el }) {
  console.log(el);
  return (
    <>
      {/* <div style={{height:'500px', width:'500px'}}>
        <h2>Bienvenida al Inventario</h2>
        <h2 style={{color:"white"}}><strong>Nombre:</strong>{el?.nombre}</h2>
        <h2><b>Descripcion</b>{el?.descripcion}</h2>
        <h2><b>Precio</b>{el?.precio}</h2>
        <h2><b>Unidades</b>{el?.unidades}</h2>
        </div> */}

      <div
        className={styles.container}
      >
        <div className={styles.card}>
          <div className={styles.photo}>
              <Image
              alt='/images/serpiente.png' src={'/images/serpiente.png'} width={230}height={200} className={styles.img} 
              />
          </div>
          
          <div className={styles.description}>
            <h2 className={styles.h2}>{el.nombre}</h2>
            <h1 style={{margin:'5px 0'}}>${el.precio}</h1>
            <p>
              {el.descripcion}
            </p>
            {/* <IoIosCart fontSize={'30px'}/> */}
            <button style={{width:'90%', marginBottom:'0'}} className={styles1.button}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
