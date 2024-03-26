const mongoose = require('mongoose')
const joi = require('joi')
const productSchema = new mongoose.Schema({
productId: { 
    type: String,
    required: true,
    unique: true 
},
name: { 
    type: String,
    required: true
},
description: { 
    type: String 
},
  price: {
    type: Number,
    required: true
},
});

module.exports = mongoose.model("product", productSchema);