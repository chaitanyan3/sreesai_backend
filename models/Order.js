const mongoose3 = require("mongoose");


const orderSchema = new mongoose3.Schema({
items: Array,
totalAmount: Number,
paymentStatus: { type: String, default: "Pending" },
date: { type: Date, default: Date.now }
});


module.exports = mongoose3.model("Order", orderSchema);