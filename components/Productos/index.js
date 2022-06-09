
import styles1 from '../Navbar/Navbar.module.css'
import Image from 'next/image'
import styles from "../Inventario/Inventario.module.css";
import Link from 'next/link'
import { convertToPath } from '../../lib/items';

export default function Productos({el}){
  console.log(el);
    return(
        <>
      {/* <div style={{height:'500px', width:'500px'}}>
        <h2>Bienvenida al Inventario</h2>
        <h2 style={{color:"white"}}><strong>Nombre:</strong>{el?.nombre}</h2>
        <h2><b>Descripcion</b>{el?.descripcion}</h2>
        <h2><b>Precio</b>{el?.precio}</h2>
        <h2><b>Unidades</b>{el?.unidades}</h2>
        </div> */}

      {/* <Link href={`/productos/${convertToPath(el.nombre)}`}> */}
      <a>
      <div
        className={styles.container}
      >
        <div className={styles.card}>
          <div className={styles.photo}>
              <Image
              alt={el.img} src={el?.img} className={styles.img} width={230}height={200}
              />
          </div>
          <div className={styles.description}>
            <h2 className={styles.h2}>{el.nombre}</h2>
            <h1 style={{margin:'5px 0'}}>${el.precio}</h1>
            <p>
              {el.descripcion}
            </p>
            {/* <IoIosCart fontSize={'30px'}/> */}
            <button className={styles1.button} style={{width:'90%', marginBottom:'0'}}>Comprar</button>
          </div>
        </div>
      </div>
      </a>
      {/* </Link> */}
    </>
    )
}