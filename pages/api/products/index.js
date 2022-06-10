import { products } from "../../../services/products";

export default function handler(req, res){
    res.status(200).json(
        [
            {
                nombre: "Set de Collar, dije y topos de Cactus",
                descripcion:"Desde el lejano oeste Mrs. T ha encontrado cactus unicos, encadenandolos a su cuello, para compartirlos contigo.",
                precio:"12.900",
                unidades:"3",
                referencia:"1234",
                id:1,
                img:'/images/collar cactus acero frambuesa.jpg',
                pago: "https://biz.payulatam.com/B0ed8278687EC4C"
            },
            {
                nombre:"Set de Collar y dije de Osito",
                descripcion:"Un ataque de gomitas infernal aplasto el planeta, la serpiente las a capturado en sus collares",
                precio:"14.900",
                unidades:"2",
                referencia:"2131",
                id:2,
                img:'/images/collar osito verde acero frambuesa.jpg',
                pago: "https://biz.payulatam.com/B0ed8278687EC4C"
        
        
            },
            {
                nombre:"Set de Collar, dije y topos de Palmera",
                descripcion:"Desde las paradisíacas playas de madagascar llegan los collares de Palmera ",
                precio:"12.900",
                unidades:"5",
                referencia:"2323",
                id:3,
                img:'/images/collar palmera acero frambuesa.jpg',
                pago: "https://biz.payulatam.com/B0ed8278687EC4C"
        
            },
            {
                nombre:"Set de Collar, dije y topos de Dinosaurio",
                descripcion:"Visitamos un planeta donde no se habian extinto los dinosaurios y quisimos traerlos a la tierra de alguna manera.",
                precio:"12.900",
                unidades:"5",
                referencia:"2328",
                id:4,
                img:'/images/collar dije dino acero frambuesa.jpg',
                pago: "https://biz.payulatam.com/B0ed8278687EC4C"
        
            },
            {
                nombre:"Set de Collar, dije y topos de Serpiente",
                descripcion:"Encadenamos la silueta de los habitantes de Python Verse, para que pueda ser lucida por ti.",
                precio:"12.900",
                unidades:"5",
                referencia:"2329",
                id:5,
                img:'/images/collar serpiente acero frambuesa.jpg',
                pago: "https://biz.payulatam.com/B0ed8278687EC4C"
        
            },
        
        ]
        
    )
}