const mongoose = require('mongoose')
const ticketReservationSchema = mongoose.Schema({
    travel:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "travels",
        required : true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users",
        required : true
    },

    deleted : {
        type:Boolean,
        default : false
    },
    confirmed : {
        type : Boolean,
        default : false
    }

})

// const ticket = mongoose.model('ticket',ticketReservationSchema)
module.exports = mongoose.model('ticket',ticketReservationSchema)