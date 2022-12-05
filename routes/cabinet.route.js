const express=require('express')
const Cabinet = require('../models/cabinet.model')
const Consultation = require("../models/consultation.model");
const Medecin = require("../models/medecin.model");
const router=express.Router()

router.post('/addCabinet',(req,res)=>{
    Cabinet.findOne({adresse:req.body.adresse},(err,cabinet)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(cabinet==null){
                const cabinet = Cabinet({
                    nom:req.body.nom,
                    adresse:req.body.adresse,
                    tel:req.body.tel,
                })
                cabinet.save()
                    .then((err)=>{
                        if(err){
                            console.log(err)
                            res.json(err)
                        }else{
                            console.log(cabinet)
                            res.json(cabinet)
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


router.post("/createCabinet",(req, res) => {
    Cabinet.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

router.get("/getCabinets", (req, res) => {
    Cabinet.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})


router.get("/getCabinet/:cabinetID",(req, res) => {
    Cabinet.findOne({ IdCabinet: req.params.cabinetID})
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Cabinet not found'}))
})

router.put('/addServiceToCabinet3/:cabinetID/:seviceID',(req,res)=>{
    Cabinet.findOne({IdCabinet: req.params.cabinetID }, function(err, cabinet){
        if(err){
            console.log(err)
            res.json(err)
        } else {if(cabinet){
            if(req.params.seviceID){
                cabinet.list_IdSevices.push(req.params.seviceID)
            }
            cabinet.save(function(err){
                if(err) console.log(err)
                else console.log('cabinet got updated...')
            });
        }}
    });
    res.send('cabinet updated');
})
router.put('/deleteServiceToCabinet3/:cabinetID/:seviceID',(req,res)=>{
    Cabinet.findOne({IdCabinet: req.params.cabinetID }, function(err, cabinet){
        if(err){
            console.log(err)
            res.json(err)
        } else {if(cabinet){
            if(req.params.seviceID){
                cabinet.list_IdSevices.pull(req.params.seviceID)
            }
            cabinet.save(function(err){
                if(err) console.log(err)
                else console.log('cabinet got updated...')
            });
        }}
    });
    res.send('cabinet updated');
})


router.put('/addMedecinToCabinet/:cabinetID/:medecinID',(req,res)=>{
    Cabinet.findOne({IdCabinet: req.params.cabinetID }, function(err, cabinet){
        if(err){
            console.log(err)
            res.json(err)
        } else {if(cabinet){
            if(req.params.medecinID){
                cabinet.list_IdMedecins.push(req.params.medecinID)
            }
            cabinet.save(function(err){
                if(err) console.log(err)
                else console.log('cabinet got updated...')
            });
        }}
    });
    res.send('medecin to cabinet updated');
})


router.put('/deleteMedecinToCabinet/:cabinetID/:medecinID',(req,res)=>{
    Cabinet.findOne({IdCabinet: req.params.cabinetID }, function(err, cabinet){
        if(err){
            console.log(err)
            res.json(err)
        } else {if(cabinet){
            if(req.params.medecinID){
                cabinet.list_IdMedecins.pull(req.params.medecinID)
            }
            cabinet.save(function(err){
                if(err) console.log(err)
                else console.log('cabinet got updated...')
            });
        }}
    });
    res.send('cabinet updated');
})
module.exports = router