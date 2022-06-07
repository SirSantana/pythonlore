import LogoInicio from "../LogoInicio/LogoInicio";
import styles from "./Inventario.module.css";
import { IoIosCart } from "react-icons/io";
import styles1 from '../Navbar/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { convertToPath } from "../../libs/items";
export default function Inventario({ el }) {
  return (
    <>
      {/* <div style={{height:'500px', width:'500px'}}>
        <h2>Bienvenida al Inventario</h2>
        <h2 style={{color:"white"}}><strong>Nombre:</strong>{el?.nombre}</h2>
        <h2><b>Descripcion</b>{el?.descripcion}</h2>
        <h2><b>Precio</b>{el?.precio}</h2>
        <h2><b>Unidades</b>{el?.unidades}</h2>
        </div> */}

     <Link href={`/productos/${convertToPath(el.nombre)}`}>
     <a>
     <div
        className={styles.container}
      >
        <div className={styles.card}>
          <div className={styles.photo}>
              <Image
              alt='/images/serpiente.png' src={'/images/serpiente.png'} width={230}height={200} className={styles.img} 
              />
              {/* <div style={{background:'#453072', width:'70%'}}>
              <h4 style={{color:'white'}}>Acero Inoxidable</h4>

              </div> */}
          </div>
          
          <div className={styles.description}>
            <h2 className={styles.h2}>{el.nombre}</h2>
            <h1 style={{margin:'5px 0'}}>${el.precio}</h1>
            <p>
              {el.descripcion}
            </p>
            <p>
              Acero Inoxidable
            </p>
            {/* <IoIosCart fontSize={'30px'}/> */}
            <button style={{width:'90%', marginBottom:'0'}} className={styles1.button}>Comprar</button>
          </div>
        </div>
      </div>
     </a>
     </Link> 
    </>
  );
}
