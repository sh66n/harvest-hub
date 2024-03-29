const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    name: String,
    username: String,
    salt: String,
    hash: String,
});

const Farmer = mongoose.model("Farmer", farmerSchema);

module.exports = Farmer;
