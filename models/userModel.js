import mongoose from "mongoose";


const userModel = new mongoose.Model({
    nombre:{type:String, required},
    ventas:{type:Number},
    role:{type:String}
},{versionKey:false})

export default mongoose.models.userPython || mongoose.model('userPython', userModel)
