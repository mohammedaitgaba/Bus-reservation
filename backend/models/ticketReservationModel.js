const mongoose = require('mongoose')
const ticketReservationSchema = mongoose.Schema({
    travel:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "travels"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users"
    },

    deleted : {
        type:Boolean,
        default : false
    }
})

// const ticket = mongoose.model('ticket',ticketReservationSchema)
module.exports = mongoose.model('ticket',ticketReservationSchema)