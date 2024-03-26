const mongoose = require('mongoose')
const eventType = {
    visitedStore: "visitedStore",
    pageView: "pageView",
    categoryView: "categoryView",
    productView: "productView",
    order: "order",
    cartUpdated: "cartUpdated",
    cartCreated: "cartCreated",
    customerAdded: "customerAdded",
    customerCreated: "customerCreated",
}
const eventScheme = new mongoose.Schema({
    eventId :{
        type: String,
        require: true,
        unique: true
    },
    customerId :{
        type: String,
        require: true
    },
    eventName :{
        type: String,
        required: true,
        enum: Object.values(eventType),
    },
    eventData :{
        type: Object,
        required: true
    },
    createdAt :{
        type: Date,
        default: Date.now
    },
    ingestedAt :{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model("Event",eventScheme)