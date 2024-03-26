const Customer  = require('../models/scheme')
//creating100
async function create100Records(req, res){
    for(let i=0;i<100;i++){
        const customers = await Customer({
            name: `customer${i}`,
            email: `customer${i}@gmail.com`,
            revenue: 22,
            profit: 44,
            orderCount: 56
        })
        await customers.save()
    }
    res.send('done')
}
//fetchingall
async function fetchingAllRecords(req,res){
    const customers = await Customer.find()
    res.send(customers)
}
//fetchById
async function fetchOneRecord(req,res){
    const url = req.params
    //console.log(url)
    const customer = await Customer.findOne({
        _id: url.id
    })
    res.send(customer)
}
//summary
async function summary(req,res){
    const totalNumberOfCustomers = await Customer.countDocuments()
    const totalOrderCount = await Customer.aggregate([
        {
            $group:{
                _id: null,
                totalOrders: { $sum: '$orderCount' }
            }
        }
    ])
    const totalRevenue = await Customer.aggregate([
        {
            $group:{
                _id: null,
                totalRevenue:{ $sum: '$revenue'}
            }
        }
    ])
    const avgOrderPerCustomer = totalOrderCount[0].totalOrders / totalNumberOfCustomers
    res.json({
        totalNumberOfCustomers,
        totalOrderCount: totalOrderCount[0].totalOrders,
        totalRevenue: totalRevenue[0].totalRevenue,
        avgOrderPerCustomer
      })
}
//fetchByName
async function fetchByName(req,res){
    const name = req.params.name
    const customer = await Customer.findOne({
        name: name
    })
    res.send(customer)
}
//adding single record
async function addRecord(req,res){
    const data = req.body
    console.log(data) 
    const newConstomer = await Customer(data)
    await newConstomer.save()
    res.send(newConstomer)
}
//finding and update
async function findAndUpdate(req,res){
    const url = req.params
    const data = req.body;
    
    const customers = await Customer.findOneAndUpdate({
        _id: url.id
    },{
        name: data.name
    })
    res.send(customers)
}
//deleteRecord
async function deleteRecord(req,res){
    const url = req.params
  try {
    const deletedDocument = await Customer.findByIdAndDelete(req.params.id);

    if (!deletedDocument) {
      return res.status(404).send('Document not found');
    }

    res.status(200).send('Document deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
}
module.exports = {
    create100Records,fetchingAllRecords,fetchOneRecord,addRecord,findAndUpdate,deleteRecord,fetchByName,summary,
}