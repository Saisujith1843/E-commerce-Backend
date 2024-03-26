const Event = require('../models/eventScheme')
const { entityValidationScheme } = require('../validators/entityValidator')
//createEvent
async function createEvent(req,res){
    const { eventId, customerId, eventName, eventData } = req.body
    //validator
    const validate = productValidationSchema.validate(req.body)
    console.log("VALIDATORS: ",validate)
    if(validate.error){
      return res.status(400).json({error: validate.error.details})
    }
    try {
        const newEvent = new Event({
        eventId,
        customerId,
        eventName,
        eventData
    })
    await newEvent.save()
    res.json({ message: 'Event created successfully' })
    } 
    catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Error creating event' })
  }
}
//viewById
async function viewEventById(req,res){
    const eventId = req.params.eventId
    try {
        const events = await Event.find({ eventId: eventId });
        if (!events.length) {
          return res.status(404).json({ message: 'No events found for this customer' });
        }
        res.json(events);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error in fetching event' });
      }
}
module.exports = {createEvent,viewEventById}