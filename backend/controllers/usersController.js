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
            message : "succesfully created",
            id : user.id,
            firstname : user.Fname,
            lastname : user.Lname,
            Phone : user.Phone,
            Email : user.Email,
            token : TokenGenerator(user.id)
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
            Email : user.Email,
            token : TokenGenerator(user.id)
        })
    }else{
        res.status(400)
        throw new Error('invalid info')
    }
})
const getMe =asyncHnadler( async(req,res) => {
    const {id,Fname,Lname,Email,Phone} = await User.findById(req.user.id)
    res.json({id,Fname,Lname,Email,Phone})
})

// Generate JWT
const TokenGenerator = (id)=>{
    return jwt.sign( {id},process.env.JWT_SECRET,{
        expiresIn:'10h'
    } )
}


module.exports = {
    loginUser,registerUser,getMe
}