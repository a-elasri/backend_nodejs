const express=require('express')
const app=express()
const port=8080 || process.env.PORT
const cors=require('cors')
const bodyParser=require('body-parser')

const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/CabinetsMedicaux",{useNewUrlParser:true,useUnifiedTopology:true})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/',require('./routes/admin.route'))
app.use('/info',require('./routes/cabinet.route'))
app.use('/info',require('./routes/medecin.route'))
app.use('/info',require('./routes/consultation.route'))
app.use('/info',require('./routes/service.route'))

app.listen(port,()=>{
    console.log('port runing on '+port)
})