const express=require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const GeneralClientsModel= require('./models/GeneralClients')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/GeneralClients")

app.post('/register',(req,res)=>{
    GeneralClientsModel.create(req.body)
    .then(GeneralClients=>res.json(GeneralClients))
    .catch(err=>res.json(err))
})



app.listen(3001,()=>
{
    console.log("Server is running")
})