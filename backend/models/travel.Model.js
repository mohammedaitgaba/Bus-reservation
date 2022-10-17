const mongoose = require('mongoose')
const travelSchema = mongoose.Schema({
    cityStart :{
        type : String ,
        required : true
    },
    cityEnd : {
        type : String ,
        required : true
    },
    dateStart :{
        type : Date ,
        required : true
    },
    Prix : Number,
    breakPoints : {
        type : Array,
         required : false
        },
    deleted : {
        type : Boolean , 
        default:false
    }
})

module.exports = mongoose.model('travels',travelSchema)