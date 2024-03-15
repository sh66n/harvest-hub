const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Farmer = require("./models/farmer");
const Customer = require("./models/customer");

const cors = require("cors");
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions)); // Use this after the variable declaration
// app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

const generateAccessToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username }, //this is the payload
        "mysecret"
    );
};

const generateRefreshToken = (user) => {
    return jwt.sign(
        { id: user.id, isAdmin: user.isAdmin }, //this is the payload
        "myrefreshsecret"
    );
};

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "mysecret", (err, payload) => {
            if (err) res.status(403).json("invalid token!");
            req.payload = payload;
            next();
        });
    } else {
        res.status(401).json("no token");
    }
};

const mongoose = require("mongoose");
mongoose
    .connect("mongodb://127.0.0.1:27017/harvest-hub")
    .then(() => {
        console.log("Database connected");
    })
    .catch((e) => {
        console.log("Error!", e);
    });

// FARMER ROUTES !!!!
app.get("/api/farmers", async (req, res) => {
    // console.log(req.headers["authorization"]);
    const allFarmers = await Farmer.find({}); //index
    res.send(allFarmers);
});
app.post("/api/farmers", async (req, res) => {
    const newFarmer = await Farmer.create(req.body); //create
});
app.get("/api/farmers/:id", async (req, res) => {
    const { id } = req.params;
    const requiredFarmer = await Farmer.findById(id); //show
    res.send(requiredFarmer);
});
app.patch("/api/farmers/:id", async (req, res) => {
    const { id } = req.params; //edit
    const updatedFarmer = await Farmer.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.send(updatedFarmer);
});
app.delete("/api/farmers/:id", verify, async (req, res) => {
    const { id } = req.params; //delete
    if (req.payload.id === id) {
        const deletedFarmer = await Farmer.findByIdAndDelete(id);
        res.status(200).json("user has been deleted");
    } else {
        res.status(401).json("you are not allowed to delete this user!");
    }
});
app.post("/api/farmers/login", async (req, res) => {
    const { username, password } = req.body;
    const farmer = await Farmer.findOne({ username });
    if (farmer) {
        const passwordMatches = await bcrypt.compare(password, farmer.hash);
        if (passwordMatches) {
            res.json({
                username: farmer.username,
                accessToken: generateAccessToken(farmer),
            });
        } else {
            res.status(400).json("username or password not found");
        }
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});
app.post("/api/farmers/signup", async (req, res) => {
    const { name, username, password } = req.body;
    const existingFarmer = await Farmer.findOne({ username });
    if (existingFarmer) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    const newFarmer = await Farmer.create({ name, username, salt, hash });
});
app.post("/api/farmers/logout", async (req, res) => {
    res.json(res.cookie);
});

// CUSTOMER ROUTES !!!!
app.get("/api/customers", async (req, res) => {
    const allCustomers = await Customer.find({}); //index
    res.send(allCustomers);
});
app.post("/api/customers", async (req, res) => {
    const newCustomer = await Customer.create(req.body); //create
});
app.get("/api/customers/:id", async (req, res) => {
    const { id } = req.params;
    const requiredCustomer = await Customer.findById(id); //show
    res.send(requiredCustomer);
});
app.patch("/api/customers/:id", async (req, res) => {
    const { id } = req.params; //edit
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
        new: true,
    });
    res.send(updatedCustomer);
});
app.delete("/api/customers/:id", verify, async (req, res) => {
    const { id } = req.params;
    if (req.payload.id === id) {
        res.status(200).json("user has been deleted");
    } else {
        res.status(401).json("you are not allowed to delete this user!");
    }
});
app.post("/api/customers/login", (req, res) => {
    console.log("customer login form submitted", req.body); //login
});
app.post("/api/customers/signup", (req, res) => {
    console.log("customer signup data recieved", req.body); //signup
});

app.listen(5000, () => {
    console.log("Server started at port 5000!");
});
