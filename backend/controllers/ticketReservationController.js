const asyncHnadler = require('express-async-handler')
const { populate } = require('../models/ticketReservationModel')
const Ticket = require('../models/ticketReservationModel')
const Bus = require('../models/busModel')
const Travel = require('../models/travel.Model')

const getTicket = asyncHnadler(async(req,res) =>{

    const ticket = await Ticket.find({deleted:false})
    .populate({ path:'travel',populate :{ path:'Bus'}})
    .populate('user','Fname Lname')
    res.json({ticket})
})
const getMyTickets = asyncHnadler(async(req,res) =>{ 
    const ticket = await Ticket.find({user:req.user.id}).populate('travels').populate('user','Fname Lname')
    // const ticket = await Ticket.find({_id : req.params.id , deleted:false})
    res.json({ticket})
})

const setTicket = asyncHnadler(async(id_travel,id_user) =>{
    console.log(id_travel,id_user);
    const ticket = Ticket.create({
        travel:id_travel,
        user:id_user
    })

    if (ticket) {
        return {message: "ticket has been ceated succesfully"}
    }
    else{
        return ('data error')
    }

    
})
const confirmTicket = asyncHnadler(async(req,res)=> {
    // console.log(req.body);
    const travel = await Travel.findById(req.body.travel_id).populate('Bus')
    if (travel) {
        if (travel.Seats_reserved < travel.Bus.capacity) {
            const new_ticket =  await setTicket(req.body.travel_id,req.body.id_user)
            console.log(new_ticket);
            await Travel.findByIdAndUpdate(req.body.travel_id, { $set: {Seats_reserved: travel.Seats_reserved +1 } })
            res.json({message : "reserved seccesfully"})
        }else{
            res.json({message : "this travel is alrady full"})
        }
    }
    // const {Bus_id} =req.body
    // const bus = await Bus.findById(Bus_id)
    // if (bus.capacity > 0) {
    //     await Bus.findByIdAndUpdate(Bus_id, { $set: {capacity: bus.capacity -1 } })
    //     res.json({message : "reserved seccesfully"})
    // }else{
    //     throw new Error('this travel is already full')
    // }
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
    getMyTickets,
    confirmTicket
}