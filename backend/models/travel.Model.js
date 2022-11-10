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
    dateEnd : {
        type : Date ,
        required : true
    },
    Price : {
        type : Number,
        required : true
    },
    Bus : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "bus"
    },
    Seats_reserved : {
        type : Number,
        required : true,
        default : 0
    },
    deleted : {
        type : Boolean , 
        default:false
    }
})
// const travels = mongoose.model("travels", travelSchema)
module.exports = mongoose.model('travels',travelSchema)