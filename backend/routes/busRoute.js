const express = require('express')
const router = express.Router()
const { 
    getBus,
    setBus,
 } = require('../controllers/busController')

 router.route('/').get(getBus).post(setBus)
 module.exports = router