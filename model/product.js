import mongoose from 'mongoose'
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim: true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    quantity:{
        type:Number,
        required: true,
        min:0
    }
})
export const product = mongoose.model("Product",productschema);
