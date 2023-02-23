const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const engine = require('ejs-mate');
const PORT = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/shopping-app")
.then(()=> console.log("DB CONNECTED!"))
.catch((err)=> console.log(err))

app.set("view engine", "ejs");
app.engine("ejs",engine);
// app.set("views",path.join(__dirname, "views","product"))
app.set("views",path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public", "js")))


app.get("/", (req,res)=>{

    res.render("index")
})

app.get("/products", (req,res)=>{

    res.render("./products/product")
})

app.listen(PORT, ()=>{
    console.log("server running at port 5000")
})