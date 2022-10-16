const asyncHnadler = require('express-async-handler')
const Travel = require('../models/travel.Model')

const getTravel = asyncHnadler(async(req,res) =>{
    const travel =  await Travel.find({deleted:false})
    res.json({travel})
}) 

const setTravel = asyncHnadler(async (req,res) =>{
    const {cityStart,cityEnd,dateStart,Prix,breakPoints} = req.body
    console.log(cityStart,cityEnd,dateStart,Prix,breakPoints);

    if (!cityStart || !cityEnd || !dateStart || !Prix) {
        res.status(400)
        throw new Error('Please fill all the champs')
    }
    const travel = await Travel.create({
        cityStart,
        cityEnd,
        dateStart,
        Prix,
        breakPoints
    }
        )
        if (travel) {  
            res.json({message : "created"})
        }
        else{
        throw new Error('invalid data')

    }
})

const updateTravel =asyncHnadler( async(req,res) =>{
    const travel = await Travel.findById(req.params.id)
    if (!travel) {
        throw new Error('Travel Not found')
    }
    const updatedtravel = await Travel.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
    
    res.json({updatedtravel})
})

const deleteTravel =asyncHnadler(async (req,res) =>{
    const travel = await Travel.findById(req.params.id)
    if (!travel) {
        throw new Error('Travel Not found')
    }
    // const id = req.params.id
    const updatedtravel = await Travel.findByIdAndUpdate(req.params.id, { $set: { deleted: true } })
        
    res.json({updatedtravel})
})

module.exports = {
    getTravel,
    setTravel,
    updateTravel,
    deleteTravel
}