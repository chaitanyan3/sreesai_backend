const router2 = require("express").Router();
const Order = require("../models/Order");


// Create order
router2.post("/create", async (req, res) => {
const newOrder = new Order(req.body);
await newOrder.save();
res.json({ message: "Order Created" });
});


// Get all orders
router2.get("/", async (req, res) => {
const orders = await Order.find();
res.json(orders);
});


module.exports = router2;