import mongoose from "mongoose";
const inventoryschema = new mongoose.Schema({
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    }]
});
export const inventory = mongoose.model("Inventory",inventoryschema) 
