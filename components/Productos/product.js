import Link from "next/link";
import Image from "next/image";
import styles from "../Inventario/Inventario.module.css";
import styles1 from '../Navbar/Navbar.module.css'

export default function Producto({ el }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.photo}>
            <Image
              alt={el.img} src={el?.img} className={styles.img} width={230}height={200}
              />
          </div>
          <div className={styles.description}>
            <h2 className={styles.h2}>{el.nombre}</h2>
            <h1 style={{ margin: "5px 0" }}>${el.precio}</h1>
            <p>{el.descripcion}</p>
            {/* <IoIosCart fontSize={'30px'}/> */}
            <Link href={el?.pago}>
              <a>
                <button
                  className={styles1.button}
                  style={{ width: "90%", marginBottom: "0" }}
                >
                  Comprar
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
