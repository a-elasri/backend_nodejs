const mongoose=require('mongoose')
const Schema=mongoose.Schema

const consultation = new Schema({
    idConsultation:String,
    prix:String,
})

module.exports=mongoose.model('Consultation',consultation)