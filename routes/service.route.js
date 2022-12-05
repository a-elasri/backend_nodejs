const express=require('express')
const Service = require('../models/service.model')
const router=express.Router()

router.post("/createService",(req, res) => {
    Service.create(req.body)
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(500).json({msg:  error}))
})

router.get("/searchAllServices", (req, res) => {
    Service.find({})
        .then(result => res.status(200).json({ result }))
        .catch(error => res.status(500).json({msg: error}))
})

router.get("/getService/:serviceID",(req, res) => {
    Service.findOne({ idService: req.params.serviceID })
        .then(result => res.status(200).json({ result }))
        .catch(() => res.status(404).json({msg: 'Service not found'}))
})

router.put('/updateService/:serviceID',(req,res)=>{
    Service.findOneAndUpdate({ idService: req.params.serviceID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Service not found' }))
})

router.delete('/deleteService/:serviceID',(req,res)=>{
    Service.findOneAndDelete({ idService: req.params.serviceID })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Service not found' }))
})

router.put('/updateService/:serviceID',(req,res)=>{
    Service.findOneAndUpdate({ idService: req.params.serviceID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json({ result }))
        .catch((error) => res.status(404).json({msg: 'Service not found' }))
})
router.put('/updateS/:serviceID',(req,res)=>{
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.serviceID;
    Service.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Service with id=${id}. Maybe Service was not found!`
                });
            } else res.send({ message: "Service was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
})

module.exports = router