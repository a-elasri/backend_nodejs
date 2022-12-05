const express=require('express')
const Consultation = require('../models/consultation.model')
const router=express.Router()

router.post("/createConsultation",(req, res) => {
    Consultation.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error }))
})

router.get("/getConsultations", (req, res) => {
    Consultation.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

router.get("/getConsultation/:consultationID",(req, res) => {
    Consultation.findOne({ idConsultation: req.params.consultationID})
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Consultation not found'}))
})

router.put('/updateConsultation/:consultationID',(req,res)=>{
    Consultation.findOneAndUpdate({ idConsultation: req.params.consultationID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Consultation not found' }))
})

router.delete('/deleteConsultation/:consultationID',(req,res)=>{
    Consultation.findOneAndDelete({ idConsultation: req.params.consultationID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Consultation not found' }))
})

module.exports = router