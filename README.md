# 🧃 Vending Machine REST API

A RESTful backend built using **Node.js**, **Express**, and **MongoDB (Mongoose)** that simulates a simple vending machine system.  
It supports product management and cart operations, allowing users to add, update, delete, and fetch products, as well as manage a shopping cart.

---

## 🚀 Tech Stack

- **Node.js** — Server-side runtime  
- **Express.js** — Web framework for building REST APIs  
- **MongoDB + Mongoose** — Database and ODM for structured data modeling  
- **dotenv** — Environment variable management

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Vending_Machine_RESTapi.git
cd Vending_Machine_RESTapi
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Setup environment variables
```bash
Create a .env file in the project root:

PORT=8000
MONGO_URI=mongodb://127.0.0.1:27017/vending_machine
```
### 4️⃣ Start the server
```bash
npm start
```

You should see:

✅ MongoDB connected
🚀 Server running on PORT 8000

## 🧩 API Routes Overview
🛒 Product Routes (/products)
Method	Endpoint	Description
GET	/products/	Fetch all available products
POST	/products/addproduct	Add a new product (name, price, quantity)
PUT	/products/updateproduct/:id	Update a product by ID
DELETE	/products/deleteproduct/:id	Delete a product by ID
