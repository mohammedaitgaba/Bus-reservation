const asyncHnadler = require('express-async-handler')
const User = require('../models/usersModel')
const jwt = require('jsonwebtoken')
const bycrypt = require('bcryptjs')


const registerUser = asyncHnadler( async(req,res)=>{
    // check for required data 
    const {Fname,Lname,Phone,Email,Password} = req.body
    if (!Fname || !Lname || !Phone || !Email || !Password) {
        res.status(400)
        throw new Error('Please fill all the champs')
    }

    // check for existed user
    const UserExist = await User.findOne({Email})
    if (UserExist) {
        res.status(400)
        throw new Error('Already existed')
    }
    // hash password
    const salt = await bycrypt.genSalt(10)
    const hashPassword = await bycrypt.hash(Password,salt)

    // create user
    const user = await User.create({
        Fname,
        Lname,
        Phone,
        Email,
        Password : hashPassword
    })
    if (user) {
        res.json({
            id : user.id,
            firstname : user.Fname,
            lastname : user.Lname,
            Phone : user.Phone,
            Email : user.Email
        })
    } else {
        res.status(400)
        throw new Error('data is not valid')
    }
})

const loginUser = asyncHnadler(async(req,res)=>{
    const {Email,Password}= req.body
    const user = await User.findOne({Email})
    if (user &&(await bycrypt.compare(Password,user.Password))) {
        res.json({
            id : user.id,
            firstname : user.Fname,
            lastname : user.Lname,
            Phone : user.Phone,
            Email : user.Email
        })
    }else{
        res.status(400)
        throw new Error('invalid info')
    }
})


module.exports = {
    loginUser,registerUser
}