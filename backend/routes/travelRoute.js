const express = require('express')
const router = express.Router()
const { 
    getTravel,
    setTravel,
    updateTravel,
    deleteTravel
 } = require('../controllers/travelController')

router.route('/').get(getTravel).post(setTravel)
router.route('/:id').put(updateTravel).delete(deleteTravel)




module.exports = router