const asyncHnadler = require('express-async-handler')
const Travel = require('../models/travel.Model')

const getAllTravels = asyncHnadler(async(req,res) =>{
    const travel =  await Travel.find({deleted:false}).populate('Bus')
    res.json({travel})
})
const getTravelById = asyncHnadler(async(req,res) =>{
    console.log(req.body.id);
    const travel = await Travel.findById(req.body.id).populate('Bus')
    travel?res.json({travel}) : res.json({message:"not found"})
    
})
const checkTravel = asyncHnadler(async(req,res)=> {
    const {cityStart,cityEnd} = req.params
    const travel = await Travel.find({cityStart: cityStart,cityEnd : cityEnd}).populate('Bus')
    if (travel.length == 0) {
        throw new Error('Travel not found')
    }
    else{
        res.json({travel})
    }
})
const setTravel = asyncHnadler( (req,res) =>{
    (!req.body.cityStart || !req.body.cityEnd || !req.body.dateStart || !req.body.Price || !req.body.Bus)  ?  
    res.status(400) : Error('invalid Remplir les champs');
    const {cityStart,cityEnd,dateStart,Price,Bus} =req.body;
     const travel =  Travel.create({
         cityStart,
         cityEnd,
         dateStart,
         Price,
         Bus,
     }
         )
         travel ? res.json({message : "created"}) : Error('invalid data')
 })

// problem to check cityStart not initialized

// ####################################################################


// const setTravel = asyncHnadler(async (req,res) =>{
//     const {cityStart,cityEnd,dateStart,Price,Bus} = req.body
//     console.log(req.body);

//    (!cityStart || !cityEnd || !dateStart || !Price)  ?  res.status(400) : Error('Please fill all the champs')
    
//     const travel = await Travel.create({
//         cityStart,
//         cityEnd,
//         dateStart,
//         Price,
//         Bus,
//     }
//         )
//         travel ? res.json({message : "created"}) : Error('invalid data')
// })



// ####################################################################

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
    console.log(req.params.id);
    const travel = await Travel.findById(req.params.id)
    if (!travel) {
        throw new Error('Travel Not found')
    }
    // const id = req.params.id
    const updatedtravel = await Travel.findByIdAndUpdate(req.params.id, { $set: { deleted: true } })
    updatedtravel ? res.json({message:"deleted"}):res.json({message:"error"})
    
})

module.exports = {
    getAllTravels,
    setTravel,
    updateTravel,
    deleteTravel,
    checkTravel,
    getTravelById
    // newBreakCity
}