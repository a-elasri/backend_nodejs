const express=require('express')
const Admin = require('../models/admin.model')
const router=express.Router()

router.post('/signup',(req,res)=>{
    Admin.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = Admin({
                    email:req.body.email,
                    password:req.body.password
                })
                user.save()
                    .then((err)=>{
                        if(err){
                            console.log(err)
                            res.json(err)
                        }else{
                            console.log(user)
                            res.json(user)
                        }

                    })
            }else{

                res.json({
                    message:'email is not avilable'
                })
            }
        }
    })

})

router.post('/signin',(req,res)=>{
    Admin.findOne({email:req.body.email,password:req.body.password},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            res.json(user)
        }
    })
})

router.get('/users', (request, response) => {
    Admin.find()
        .then(data => response.json(data))
        .catch(error => response.json(error))
})

router.post('/addUser',(req,res)=>{
    Admin.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = Admin({
                    email:req.body.email,
                    password:req.body.password,
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    tel:req.body.tel
                })
                user.save()
                    .then((err)=>{
                        if(err){
                            console.log(err)
                            res.json(err)
                        }else{
                            console.log(user)
                            res.json(user)
                        }

                    })
            }else{

                res.json({
                    message:'email is not avilable'
                })
            }
        }
    })
})

router.post("/createUser",(req, res) => {
    Admin.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

router.get("/getUser/:userEmail",(req, res) => {
    Admin.findOne({ email: req.params.userEmail })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Admin not found'}))
})


module.exports = router