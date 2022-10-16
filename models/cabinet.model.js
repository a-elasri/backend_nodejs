const mongoose=require('mongoose')
const Schema=mongoose.Schema

const cabinet = new Schema({
    IdCabinet:String,
    nom:String,
    adresse:String,
    tel:String,
    list_IdSevices:[],
    list_IdMedecins:[]
})

module.exports=mongoose.model('Cabinet',cabinet)