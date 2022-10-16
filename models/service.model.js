const mongoose=require('mongoose')
const Schema=mongoose.Schema

const service = new Schema({
    idService:String,
    nom:String,
})

module.exports=mongoose.model('Service',service)