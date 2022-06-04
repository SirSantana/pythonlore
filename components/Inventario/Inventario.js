

export default function Inventario({el}){
    console.log(el);
    return(
        <>
        <h2>Bienvenida al Inventario</h2>
        <h2 style={{color:"white"}}><strong>Nombre:</strong>{el.nombre}</h2>
        <h2><b>Descripcion</b>{el.descripcion}</h2>
        <h2><b>Precio</b>{el.precio}</h2>
        <h2><b>Unidades</b>{el.unidades}</h2>


        </>
    )
}