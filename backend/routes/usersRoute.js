const express = require('express')
const router = express.Router()
const { getUsers,setUser } = require('../controllers/usersController')

router.route('/').get(getUsers).post(setUser)

module.exports = router