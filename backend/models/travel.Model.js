const mongoose = require('mongoose')
const travelSchema = mongoose.Schema({
    Fname : String,
    Lname : String,
    Phone : Number,
    Email : {type : String ,required :true, unique :true },
    Password : String

},{
    timestamps : true
})

module.exports = mongoose.model('travels',travelSchema)