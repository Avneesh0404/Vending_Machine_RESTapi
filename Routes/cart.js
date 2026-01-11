import express from'express';
const cartroute = express.Router(); 
import {Cart} from '../model/cart.js'
import { product } from '../model/product.js';


cartroute.get('/',async(req,res)=>{
    try {
        const cart_items =await Cart.find();
        res.status(200).json(cart_items);
    } catch (error) {
      console.log(error);
        res.status(500).json({msg:"error getting cart items"})
    }
})


cartroute.post("/addtocart/:id", async (req, res) => {
  try {
    const { id } = req.params;               
    const { quantity } = req.body;           

    const pr = await product.findById(id);
    if (!pr) return res.status(404).json({ error: "Product not found" });

    let c = await Cart.findOne();
    if (!c) c = new Cart({ items: [], total_value: 0 });

    const existingItem = c.items.find(
      (item) => item.product.toString() === id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      c.items.push({ product: id, quantity });
    }

    c.total_cart_value+=pr.price*quantity;
    pr.quantity-=quantity
    await pr.save();
    await c.save();

    res.status(200).json({ msg: "Item added successfully", cart: c });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Adding item to cart failed" });
  }
});


cartroute.delete("/delete",async (req,res)=>{
  try{
    await Cart.deleteMany({});
    res.status(200).json({msg:"Cart items deleted completely"})
  }
  catch(error){
    res.status(500).json({error:"Failed to delete Cart items"})
  }

})

export default cartroute