const asyncHnadler = require('express-async-handler')
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')

const loginAdmin = asyncHnadler(async(req,res)=>{
    const {Email,Password}= req.body
    const admin = await Admin.findOne({Email})
    if (admin &&(await bycrypt.compare(Password,admin.Password))) {
        res.json({
            message : "welcome",
            id : admin.id,
            firstname : admin.Fname,
            lastname : admin.Lname,
            Phone : admin.Phone,
            Email : admin.Email,
            token : TokenGenerator(admin.id)
        })
    }else{
        res.status(400)
        throw new Error('invalid info')
    }
})

const TokenGenerator = (id)=>{
    return jwt.sign( {id},process.env.JWT_SECRET,{
        expiresIn:'10h'
    } )
}

module.exports = {
    loginAdmin
}