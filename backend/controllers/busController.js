const asyncHnadler = require('express-async-handler')
const Bus = require('../models/busModel')

const getBus = asyncHnadler(async(req,res)=>{

    const bus = await Bus.find({})
    res.json({bus})
})

const setBus = asyncHnadler(async(req,res)=>{
    const {name,capacity} = req.body
    if (!name) {
        throw new Error('please fill all the champs')
    }
    
    const bus = await Bus.create({
        name,
        capacity
    })

    if (bus) {  
        res.json({message : "succesfuly created"})
    }
    else{
        throw new Error('invalid data')

    }
    
})

module.exports = {
    getBus,setBus
}