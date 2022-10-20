const express = require('express')
const router = express.Router()
const { 
    getAllTravels,
    setTravel,
    updateTravel,
    deleteTravel,
    checkTravel
    // newBreakCity
 } = require('../controllers/travelController')

router.route('/').get(getAllTravels).post(setTravel)
router.route('/:cityStart/:cityEnd').get(checkTravel)
router.route('/:id').put(updateTravel).delete(deleteTravel)
// .post(newBreakCity)

module.exports = router