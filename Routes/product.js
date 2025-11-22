import express from "express";
import { product }   from '../model/product.js';
const productroute = express.Router();


productroute.get("/", async (req, res) => {
  try {
    const pr = await product.find();
    res.status(200).json(pr);
  } catch (err) {
    console.log(error);
    res.status(500).json({ error: "Falied to Fetched the products" });
  }
});

productroute.post("/addproduct", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const newpr = new product({ name, quantity, price });
    await newpr.save();
    res.status(200).json({msg:"Product added successfully"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

productroute.put("/updateproduct/:id", async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const {id} = req.params;
    await product.findByIdAndUpdate(id,{ name, quantity, price });
    res.status(200).json({ msg: "Done updation" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Update failed" });
  }
});
productroute.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await product.findByIdAndDelete(id);
    res.status(200).json({msg:"product deleted"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "deletion failed" });
  }
});

export default productroute
