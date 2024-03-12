const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/harvest-hub')
    .then(()=>{
        console.log("Database connected")
    })
    .catch((e)=>{
        console.log("Error!", e)
    })


const Farmer = require("../models/farmer");


const loadTestData = () =>{
    Farmer.insertMany([{name: "Shaan"}, {name: "Shubham"}])
        .then(() => {
            console.log("added data!")
        })
}

loadTestData();