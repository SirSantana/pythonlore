import mongoose from "mongoose";


const productoModel = new mongoose.Model({
    nombreProducto: {type: String, required: true},
    precio: {type: String},
    referencia: {type: String, required: true},
    descripcion:{type:String, required:true},
    calificacion:{type:String},
    comentarios:{type:String},
    ventas:{type:Number},
    date: {
        type:Date,
        default: Date.now()
    },
    unidades:{type:Number, required:true}
},{versionKey:false})

export default mongoose.models.productPython || mongoose.model('productPython', productoModel)
