import styles from '../Navbar/Navbar.module.css'
import Link from 'next/link'
import styles1 from './Admin.module.css'
export default function Admin(){
    return(
        <>
        <div className={styles1.container}>
        <h2 style={{color:'white',textAlign:'center'}}>Bienvenida Lore y lito</h2>
        <Link href={'/panelAdmin/newProduct'}>
        <a>
        <button className={styles.button}>Crear Producto</button>
        </a>
        </Link>
        <Link href={'/panelAdmin/inventario'}>
        <a>
        <button className={styles.button}>Inventario</button>
        </a>
        </Link>
        <Link href={'/panelAdmin/newProduct'}>
        <a>
        <button className={styles.button}>Ventas</button>
        </a>
        </Link>
        </div>
        <hr style={{width:'300px', color:'white'}}/>
        </>
    )
}