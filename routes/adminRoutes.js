const router3 = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Register Admin (Run once)
router3.post("/register", async (req, res) => {
const hashedPassword = await bcrypt.hash(req.body.password, 10);
const admin = new Admin({
username: req.body.username,
password: hashedPassword
});
await admin.save();
res.json({ message: "Admin Registered" });
});


// Login Admin
router3.post("/login", async (req, res) => {
const admin = await Admin.findOne({ username: req.body.username });
if (!admin) return res.status(400).json({ message: "Admin Not Found" });


const validPass = await bcrypt.compare(req.body.password, admin.password);
if (!validPass) return res.status(400).json({ message: "Invalid Password" });


const token = jwt.sign({ id: admin._id }, "SECRETKEY");
res.json({ token });
});


module.exports = router3;