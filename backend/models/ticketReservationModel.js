const mongoose = require('mongoose')
const ticketReservationSchema = mongoose.Schema({
    ville_depart : {
        type:String , 
        required : true
    },
    ville_destination : {
        type:String ,
         required : true
        },
    date_depart : {
        type:Date , 
        required : true
    },
    prix : {
        type:Number , 
        required : true
    },
    deleted : {
        type:Boolean,
        default : false
    }
})

module.exports = mongoose.model('ticket',ticketReservationSchema)