const mongoose2 = require("mongoose");


const productSchema = new mongoose2.Schema({
name: String,
price: Number,
stock: Number
});


module.exports = mongoose2.model("Product", productSchema);