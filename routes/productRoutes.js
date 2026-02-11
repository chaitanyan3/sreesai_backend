const router1 = require("express").Router();
const Product = require("../models/Product");


// Get all products
router1.get("/", async (req, res) => {
const products = await Product.find();
res.json(products);
});


// Add product
router1.post("/add", async (req, res) => {
const newProduct = new Product(req.body);
await newProduct.save();
res.json({ message: "Product Added" });
});


module.exports = router1;