const Joi = require('joi')
const entityValidationScheme = Joi.object({
    eventId : Joi.string().required(),
    customerId : Joi.string().required(),
    eventName : Joi.string().required(),
    eventData: Joi.date().required()
})

module.exports = {entityValidationScheme};