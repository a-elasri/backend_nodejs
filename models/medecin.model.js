const mongoose=require('mongoose')
const Schema=mongoose.Schema

const medecin = new Schema({
    idMedecin:String,
    nom:String,
    prenom:String,
    specialite:String,
    idconsultation:String
})

module.exports=mongoose.model('Medecin',medecin)