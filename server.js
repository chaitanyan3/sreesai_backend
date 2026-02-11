const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:Krishna@cluster0.b9nto7i.mongodb.net/sreesai?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

// ✅ THIS IS IMPORTANT ROUTE
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/add-product", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ message: "Product Added" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});