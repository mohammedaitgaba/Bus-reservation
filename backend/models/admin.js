const mongoose = require('mongoose')
const adminSchema = mongoose.Schema({
    Fname : {
        type : String ,
        required :true, 
    },
    Lname : {
        type : String ,
        required :true, 
    },
    Email : {
        type : String ,
        required :true, 
        unique :true,
    },
    Password : {
        type : String ,
        required :true,
    }

},{
    timestamps : true
})

module.exports = mongoose.model('admin',adminSchema)

