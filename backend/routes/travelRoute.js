const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddlware')

const { 
    getAllTravels,
    setTravel,
    updateTravel,
    deleteTravel,
    checkTravel,
    getTravelById
    // newBreakCity
 } = require('../controllers/travelController')

router.route('/').get(getAllTravels).post(setTravel)
router.post('/findTravel',getTravelById)
router.route('/:cityStart/:cityEnd').get(checkTravel)
router.route('/:id').put(updateTravel).delete(deleteTravel)
// .post(newBreakCity)

module.exports = router