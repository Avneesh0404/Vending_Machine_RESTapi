import express from 'express';
const app = express()
import dotenv from 'dotenv'
import productroute from './Routes/product.js'
import cartroute from './Routes/cart.js'
import mongoose from 'mongoose';

app.use(express.json());
app.use('/products',productroute)
app.use('/cart',cartroute);

dotenv.config()
const port = process.env.PORT;
const uri = process.env.MONGO_URI

mongoose.connect(uri).then(()=>{
    console.log('mongodb connected')
})
app.listen(port,()=>{
    console.log('Server running on PORT 8000');
})