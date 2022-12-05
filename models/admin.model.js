const mongoose=require('mongoose')
const Schema=mongoose.Schema
var bcrypt = require('bcrypt')

const admin = new Schema({
    email:String ,
    password:String,
    nom:String,
    prenom:String,
    tel:String,
    IdCabinet:String
})

admin.methods.comparePassword = function (pass, cb) {
    bcrypt.compare(pass, this.password, function (err, isMatch) {
        if(err) {
            return cb(err)
        }
        cb(null, isMatch)
    })
}

module.exports=mongoose.model('Admin',admin)