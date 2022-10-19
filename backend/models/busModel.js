const mongoose = require('mongoose')
const busSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    capacity :{
        type : Number,
        default : 50
    }
})
module.exports = mongoose.model('bus',busSchema)