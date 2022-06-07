import { products } from "../../../services/products";

export default function handler(req, res){
    res.status(200).json(
        [
            {
                "nombre": "Collar Cactus",
                "descripcion":"Desde el lejano oeste Mrs. T ha encontrado cactus unicos, encadenandolos a su cuello, para compartirlos contigo.",
                "precio":"15.000",
                "unidades":"3",
                "referencia":"1234",
                "id":1
            },
            {
                "nombre":"Collar Osito",
                "descripcion":"Un ataque de gomitas infernal aplasto el planeta, la serpiente las a capturado en sus collares",
                "precio":"13.000",
                "unidades":"2",
                "referencia":"2131",
                "id":2
        
            },
            {
                "nombre":"Collar Palmera",
                "descripcion":"Desde las paradisíacas playas de madagascar llegan los collares de Palmera ",
                "precio":"12.000",
                "unidades":"5",
                "referencia":"2323",
                "id":3
        
            }
        
        ]
        
    )
}