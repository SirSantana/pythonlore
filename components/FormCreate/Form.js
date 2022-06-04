import styles from './Form.module.css'
import { useState } from 'react'
const initialForm={
    nombre:'',
    descripcion:'',
    precio:'',
    unidades:'',
    referencia:''
}

export default function Form(){
    const [form, setForm] = useState(initialForm)
    const handleChange=()=>{

    }
    return(
        <>
        <div className={styles.container} >
            <h2 style={{color:'white', textAlign:'center'}}>Agrega un Producto</h2>
        <form style={{display:'flex', flexDirection:'column', gap:'10px'}}>
            <input className={styles.input} type="text" placeholder="Nombre Producto" onChange={handleChange} name={"nombre"} required />
            <textarea rows={3} className={styles.input2}  type="text" placeholder="Descripcion Producto" onChange={handleChange} name={"descripcion"} required></textarea>
            <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
            <input className={styles.input} type="text" placeholder="Precio" onChange={handleChange} name={"precio"} required/>

            <input className={styles.input}type="number" placeholder="Cantidad" onChange={handleChange} name={"unidades"}required min={0}/>
            <input className={styles.input}type="number" placeholder="Referencia" onChange={handleChange} name={"referencia"}required min={0}/>

            </div>

        </form>
        </div>
        <hr style={{width:'300px'}}/>
        </>
    )
}