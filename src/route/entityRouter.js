const express = require('express')
const route = express.Router()
const controller = require('../controllers/eventController')
//createEvent
route.post("/createEvent",controller.createEvent)
//viewById
route.get("/viewEventById/:eventId",controller.viewEventById)
module.exports = route