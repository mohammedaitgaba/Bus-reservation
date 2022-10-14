const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    Fname : String,
    Lname : String,
    Phone : {type : Number ,required :true, unique :true },
    Email : {type : String ,required :true, unique :true },
    Password : String

},{
    timestamps : true
})

module.exports = mongoose.model('users',usersSchema)

