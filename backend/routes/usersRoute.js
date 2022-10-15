const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddlware')
const { 
    loginUser,
    registerUser,
    getMe 
} = require('../controllers/usersController')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)

module.exports = router