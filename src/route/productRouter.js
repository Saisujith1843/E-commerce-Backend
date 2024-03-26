const express = require('express')
const route = express.Router()
const controller = require('../controllers/productController')

//addproduct
route.post("/addProduct",controller.addProduct)
//viewAllProducts
route.get("/viewAllProducts", controller.viewAllProducts)
//viewOneProduct
route.get("/viewOneProduct/:productId",controller.viewOneProduct)
//updateOneProduct
route.put("/updateOneProduct/:productId",controller.updateOneProduct)

module.exports = route