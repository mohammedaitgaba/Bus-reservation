const express = require('express')
const router = express.Router()
const {protect,onlyAdmin} = require('../middleware/authMiddlware')

const { 
    getAllTravels,
    setTravel,
    updateTravel,
    deleteTravel,
    checkTravel,
    getTravelById
    // newBreakCity
 } = require('../controllers/travelController')

router.route('/all').get(onlyAdmin,getAllTravels).post(onlyAdmin,setTravel)
router.post('/findTravel',onlyAdmin,getTravelById)
router.route('/:cityStart/:cityEnd').get(protect,checkTravel)
router.route('/:id').put(onlyAdmin,updateTravel).delete(onlyAdmin,deleteTravel)
// .post(newBreakCity)

module.exports = router