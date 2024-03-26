const mongoose = require('mongoose')
const apiTokenScheme = new mongoose.Schema({
    companyName: {
        type: String,
        require: true
    },
    apiKey: {
        type: String,
        default: new mongoose.Types.ObjectId().toString()
    },
    apiSecret: {
        type: String,
        default: new mongoose.Types.ObjectId().toString()
    }
})
module.exports = mongoose.model("apiToken",apiTokenScheme)