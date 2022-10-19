const asyncHnadler = require('express-async-handler')
const Travel = require('../models/travel.Model')

const getTravel = asyncHnadler(async(req,res) =>{
    const travel =  await Travel.find({deleted:false})
    res.json({travel})
}) 

const setTravel = asyncHnadler(async (req,res) =>{
    const {cityStart,cityEnd,dateStart,Price,breakPoints} = req.body

    if (!cityStart || !cityEnd || !dateStart || !Price) {
        res.status(400)
        throw new Error('Please fill all the champs')
    }
    const travel = await Travel.create({
        cityStart,
        cityEnd,
        dateStart,
        Price,
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
// const newBreakCity = asyncHnadler(async(req, res)=>{
//     const cityBreak = req.body
//     const id = req.params.id
//     console.log(cityBreak);
//     console.log(req.params.id);
//     const travel = await Travel.findById(req.params.id)
//     if (!travel) {
//         throw new Error('Travel not found')
//     } 
//     else {
//         const insertedBreak = await Travel.findByIdAndUpdate({id},{
//             $push:{breakPoints : cityBreak} 
//         },done)
//         res.json({breakPoints:travel.breakPoints})
//     }
// })

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
    deleteTravel,
    // newBreakCity
}