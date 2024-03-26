const ApiTokenScheme = require("../models/ApiTokenScheme");

const apiTokenMiddleWare = async(req,res,next) =>{
    console.log(req.headers)
    const {apikey, apisecret} = req.headers;

    const isValid = await ApiTokenScheme.findOne({apiKey: apikey, apiSecret: apisecret})
    if(isValid){
        next()
    } else {
        return res.send({error: "Not Authorized"})
    }
}
module.exports = {
    apiTokenMiddleWare
}