const asyncHnadler = require('express-async-handler')
const Ticket = require('../models/ticketReservationModel')

const getTicket = asyncHnadler(async(req,res) =>{

    const ticket = await Ticket.find({deleted:false}).populate('travels')
    res.json({ticket})
})
const getMyTickets = asyncHnadler(async(req,res) =>{ 
    const ticket = await Ticket.findById(req.params.id).populate('travels')
    // const ticket = await Ticket.find({_id : req.params.id , deleted:false})
    res.json({ticket})
})

const setTicket = asyncHnadler(async(req,res) =>{
    const {ville_depart,ville_destination,date_depart,travel,prix} = req.body
    console.log(req.body);
    if (!ville_depart || !ville_destination || !date_depart || !prix) {
        res.status(400)
        throw new Error('all the champs are required')
    }
    const ticket = await Ticket.create({
        ville_depart,
        ville_destination,
        date_depart,
        travel,
        prix
    })
    if (ticket) {  
        res.json({message : "succesfuly created"})
    }
    else{
        throw new Error('invalid data')

    }
    
})

const updateTicket = asyncHnadler( async(req,res) =>{
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
        throw new Error('ticket not found')
    }
    const updateTicket = await Ticket.findByIdAndUpdate(req.params.id ,req.body,{
        new : true
    })
    res.json({updateTicket})
})

const deleteTicket = async(req,res) =>{
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
        throw new Error('ticket Not found')
    }
    // const id = req.params.id
    const updatedticket = await Ticket.findByIdAndUpdate(req.params.id, { $set: { deleted: true } })
        
    res.json({updatedticket})
}

module.exports = {
    getTicket,
    setTicket,
    updateTicket,
    deleteTicket,
    getMyTickets
}