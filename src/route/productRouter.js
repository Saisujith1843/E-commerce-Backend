const express = require('express')
const route = express.Router()
const controller = require('../controllers/productController')

const checkApiMiddleware = (req, res, next) => {
    console.log(req.headers)
    const {apikey, apisecret} = req.headers;

    if(apikey == "Test" && apisecret == "Test"){
        next()
    } else {
        res.json({error: "Not Authorised"})
    }
}
//addproduct
route.post("/addProduct",controller.addProduct)
//viewAllProducts
route.get("/viewAllProducts",checkApiMiddleware, controller.viewAllProducts)
//viewOneProduct
route.get("/viewOneProduct/:productId",controller.viewOneProduct)
//updateOneProduct
route.put("/updateOneProduct/:productId",controller.updateOneProduct)

module.exports = route