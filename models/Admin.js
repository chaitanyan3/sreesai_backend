const mongoose4 = require("mongoose");


const adminSchema = new mongoose4.Schema({
username: String,
password: String
});


module.exports = mongoose4.model("Admin", adminSchema);