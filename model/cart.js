import mongoose from "mongoose";
const cartschema = new mongoose.Schema({
    items: [
        {
            product:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
            },
            quantity:{
            type:Number,
            required:true,
            min:0,
            }
        }
    ],
    total_cart_value:{
        type:Number,
        min:0,
        default:0
    }
})
export const Cart = mongoose.model("Cart",cartschema)