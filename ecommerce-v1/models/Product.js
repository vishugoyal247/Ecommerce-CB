
const mongoose = require("mongoose");

 const productSchema =  new mongoose.Schema({

    name: {

        type: String,
        required:true,
        maxLength: 25
    },

    imageURL: {
        type: String,
        required: [true, "please provide correct url!!"]
    },

    price: {

        type: Number,
        required: [true, " you need to provide ratings!!"],
        min: 1,
        max: 10
    }, 

    desciption: {

        type: String,
        
    },

    isWatched: {

        type: Boolean,
        default: false
        
    }
 })


  const Product =  mongoose.model("Product", productSchema)


  module.exports = Product;