
import styles from "../Navbar/Navbar.module.css";
import styles1 from '../AcercaDe/AcercaDe.module.css'
export default function ComoComproComponent(){
    return(
        <>
        <div className={styles1.container}>
        <div className={styles1.card}>
          <h2 style={{color:'#b97cf1'}}>¿Cómo Compro?</h2>
          <div style={{marginLeft:'20px'}}>
          <h3 style={{color:'#b97cf1'}}>Metodo 1</h3>
          <section style={{marginLeft:'20px'}}>

          <h4>
              1. Puedes escribirnos por Instagram enviandonos el producto que te interesa
          </h4>
          <h4>
             2. Nosotros te daremos los datos para realizar la consignacion por Bancolombia

          </h4>
          </section >

          <h3 style={{color:'#b97cf1'}}>Metodo 2</h3>
          <section style={{marginLeft:'20px'}}>
          <h4>
              1. Ingresas a nuestra pagina, miras nuestros productos y eliges el producto que te interesa
          </h4>
          <h4>
             2. Le das click en comprar y te llevara a la pasarela de pago de Pay U
          </h4>
          <h4>
             3. Ahí llenaras tus datos y realizaras el proceso de compra
          </h4>
          <h4>
             4. Y listo!, tu producto llegara a tu casa
          </h4>
          </section>
          
          </div>
          <div style={{display:'flex', flexDirection:'row', gap:'20px'}}>
         
          </div>
            <h3 style={{color:'#b97cf1', marginLeft:'60%'}}>Un gusto, Mrs.T y Mr.H</h3>
            
        </div>
        
      </div>
        </>
    )
}