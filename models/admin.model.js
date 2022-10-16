const mongoose=require('mongoose')
const Schema=mongoose.Schema

const admin = new Schema({
    email:String ,
    password:String,
    nom:String,
    prenom:String,
    tel:String,
    IdCabinet:String
})

module.exports=mongoose.model('Admin',admin)