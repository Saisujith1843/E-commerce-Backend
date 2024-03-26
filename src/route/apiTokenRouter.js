const express = require('express')
const { addApiToken,viewAllApiTokens } = require('../controllers/apiTokenController')
const { apiTokenMiddleWare } = require('../middleWare/apiTokenMiddleWare')
const route = express.Router()
//adding api token
route.post('/addApiToken',apiTokenMiddleWare, addApiToken)
route.get('/ViewAllTokens',apiTokenMiddleWare, viewAllApiTokens)
module.exports = route