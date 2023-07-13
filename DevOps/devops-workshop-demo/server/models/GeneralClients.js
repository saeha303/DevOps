const mongoose = require('mongoose')

const GeneralClientsSchema =new mongoose.Schema({
    name:String,
    nid:String,
    address:String,
    password:String,
})

const GeneralClientsModel = mongoose.model("General Clients", GeneralClientsSchema)
module.exports=GeneralClientsModel