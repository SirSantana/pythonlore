import styles from './styles.module.css'

export default function PagoExistoso(){
    return(
        <>
        <div className={styles.card}>
            <h2 style={{textAlign:'center', fontWeight:'800', fontSize:'35px'}}>¡Pago Exitoso!</h2>
            <h3 style={{textAlign:'center', marginTop:0}}>
                Gracias por tu pedido, en los proximos dias lo recibiras.
            </h3>
            <h4 className={styles.firma}>- Mrs. T & Mr. H</h4>
            </div>
        </>
    )
}