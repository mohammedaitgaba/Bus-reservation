const asyncHnadler = require('express-async-handler')
const Ticket = require('../models/ticketReservationModel')

const getTicket = asyncHnadler(async(req,res) =>{

    const ticket = await Ticket.find({deleted:false}).populate('travel').populate('user','Fname Lname')
    res.json({ticket})
})
const getMyTickets = asyncHnadler(async(req,res) =>{ 
    const ticket = await Ticket.find({user:req.user.id}).populate('travels').populate('user','Fname Lname')
    // const ticket = await Ticket.find({_id : req.params.id , deleted:false})
    res.json({ticket})
})

const setTicket = asyncHnadler(async(req,res) =>{
    const {travel,user} = req.body
    // if (!travel||!user) {
    //     throw new Error("Not found")
    // }

    const ticket = Ticket.create({
        travel,
        user
    })
    if (ticket) {
        
        res.json({message: "ticket has been ceated succesfully"})
        // this.getTicket
    }
    else{
        throw new Error('data error')
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