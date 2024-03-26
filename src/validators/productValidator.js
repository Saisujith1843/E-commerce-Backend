const Joi = require('joi')
const productValidationSchema = Joi.object({
    productId : Joi.string().required(),
    name : Joi.string().required(),
    description : Joi.string().required(),
    price: Joi.number().required()
})

module.exports = {productValidationSchema};
