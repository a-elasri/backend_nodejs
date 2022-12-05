const express=require('express')
const Medecin = require('../models/medecin.model')
const Cabinet = require("../models/cabinet.model");
const router=express.Router()

router.post('/addMedecin',(req,res)=>{
        const medecin = Medecin({
            nom:req.body.nom,
            prenom:req.body.prenom,
            specialite:req.body.specialite,
        })
        medecin.save()
            .then((err)=>{
                if(err){
                    console.log(err)
                    res.json(err)
                }else{
                    console.log(medecin)
                    res.json(medecin)
                }
            })
})

router.post("/createMedecin",(req, res) => {
    Medecin.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

router.get("/getMedecins", (req, res) => {
    Medecin.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

router.get("/getMedecin/:medecinID",(req, res) => {
    Medecin.findOne({ idMedecin: req.params.medecinID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Medecin not found'}))
})

router.put('/updateMedecin/:medecinID',(req,res)=>{
    // const id = Number(req.params.medecinID)
    // const index = medecin.findIndex(medecin => medecin.id === id)
    // const updatedMedecin = {
    //     id: medecin[index].id,
    //     nom: req.body.name,
    //     prenom: req.body.prenom,
    //     specialite:req.body.specialite
    // }
    //
    // medecin[index] = updatedMedecin
    // res.status(200).json('Medecin updated')

    Medecin.findOneAndUpdate({ idMedecin: req.params.medecinID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Medecin not found' }))
})

router.delete('/deleteMedecin/:medecinID',(req,res)=>{
    // const id = Number(req.params.medecinID)
    // const index = medecin.findIndex(medecin => medecin.id === id)
    // medecin.splice(index,1)
    // res.status(200).json('Medecin deleted')
    Medecin.findOneAndDelete({ idMedecin: req.params.medecinID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Medecin not found' }))
})

module.exports = router