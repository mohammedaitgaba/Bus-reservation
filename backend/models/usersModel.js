const mongoose = require('mongoose')
const validator = require('validator')
const usersSchema = mongoose.Schema({
    Fname : {
        type : String ,
        required :true, 
    },
    Lname : {
        type : String ,
        required :true, 
    },
    Phone : {
        type : Number ,
        required :true, 
        unique :true ,
        validate(value){
            return validator.isEmail(value)
        }},
    Email : {
        type : String ,
        required :true, 
        unique :true 
    },
    Password : String

},{
    timestamps : true
})

module.exports = mongoose.model('users',usersSchema)

