const mongoose = require('mongoose')
const userScheme = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        lowercase: true
    },
    revenue:{
        type: Number,
        require: true,
        default:0
    },
    profit:{
        type: Number,
        require:true,
        default:0
    },
    orderCount:{
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Customer',userScheme)