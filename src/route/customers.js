const express = require('express')
const route = express.Router()
const controller = require('../controllers/controller')
//creating100
route.get("/create100",controller.create100Records)
//fetch all
route.get("/customer",controller.fetchingAllRecords)
//fetchById
route.get("/customer/:id",controller.fetchOneRecord)
//fetchByName
route.get("/customer/name/:name",controller.fetchByName)
//adding a single record
route.post("/customer",controller.addRecord)
//finding and update
route.put("/customer/:id",controller.findAndUpdate)
//deleting
route.delete("/customer/:id",controller.deleteRecord)
//getsummary
route.get("/customer/summary/summary",controller.summary)
module.exports = route