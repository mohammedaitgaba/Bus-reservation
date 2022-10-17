const asyncHnadler = require('express-async-handler')
const Ticket = require('../models/ticketReservationModel')

const getTicket = asyncHnadler(async(req,res) =>{
    const ticket = await Ticket.find({})
    res.json({ticket})
})

const setTicket = asyncHnadler(async(req,res) =>{
    const {ville_depart,ville_destination,date_depart,prix} = req.body
    console.log(req.body);
    if (!ville_depart || !ville_destination || !date_depart || !prix) {
        res.status(400)
        throw new Error('all the champs are required')
    }
    const ticket = await Ticket.create({
        ville_depart,
        ville_destination,
        date_depart,
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
    deleteTicket
}