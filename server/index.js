const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const cors = require("cors");
const corsOptions = {
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/harvest-hub')
    .then(()=>{
        console.log("Database connected")
    })
    .catch((e)=>{
        console.log("Error!", e)
    })

const Farmer = require("./models/farmer");
const Customer = require("./models/customer");



// FARMER ROUTES !!!!
app.get("/api/farmers", async(req, res)=>{
    const allFarmers = await Farmer.find({});                   //index
    res.send(allFarmers)
})
app.post("/api/farmers", async(req, res) => {
    const newFarmer = await Farmer.create(req.body);            //create
})
app.get("/api/farmers/:id", async(req, res) => {
    const {id} = req.params
    const requiredFarmer = await Farmer.findById(id);           //show
    res.send(requiredFarmer)
})
app.patch("/api/farmers/:id", async(req, res) => {
    const {id} = req.params;
    const updatedFarmer = await Farmer.findByIdAndUpdate(id, req.body, {new: true})
    res.send(updatedFarmer)
})
app.delete("/api/farmers/:id", async(req, res) => {
    const {id} = req.params                                     //delete
    await Farmer.deleteOne({_id: id})
})
app.post("/api/farmers/login", (req, res) => {
    console.log("farmer login form submitted!", req.body)
})
app.post("/api/farmers/signup", (req, res) => {
    console.log("farmer signup data recieved", req.body)
})




// CUSTOMER ROUTES !!!!
app.get("/api/customers", async(req, res) => {
    const allCustomers = await Customer.find({});
    res.send(allCustomers)
})
app.post("/api/customers", async(req, res) => {
    const newCustomer = await Customer.create(req.body);
})
app.get("/api/customers/:id", async(req, res) => {
    const {id} = req.params;
    const requiredCustomer = await Customer.findById(id);
    res.send(requiredCustomer);
})
app.patch("/api/customers/:id", async(req, res) => {
    const {id} = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {new: true})
    res.send(updatedCustomer)
})
app.delete("/api/customers/:id", async(req, res) => {
    const {id} = req.params;
    await Customer.deleteOne({_id: id})
})
app.post("/customers/login", (req, res) => {
    console.log("customer login form submitted", req.body)
})
app.post("/customers/signup", (req, res) => {
    console.log("customer signup data recieved", req.body)
})



app.listen(5000, ()=>{
    console.log("Server started at port 5000!")
})