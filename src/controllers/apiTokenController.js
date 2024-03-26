const apiToken = require('../models/ApiTokenScheme')
//addToken
async function addApiToken(req,res){
    try{
        const exist = await apiToken.findOne({companyName})
        if(exist){
            return res.status(400).json({error : "companyName already exist"})
        }
        const {companyName} = req.body
        await apiToken.create({
            companyName
        })
        res.send("Saved")
    } catch(error) {
        res.json({error : "error in sending"})
    }
}
//viewall
async function viewAllApiTokens(req,res){
    console.log(req.headers)
    try{
        allTokens = await apiToken.find()
        res.send(allTokens)
    }
    catch(error){
        res.json({error : "error in viewing all"})
    }
}
module.exports = {addApiToken,viewAllApiTokens}