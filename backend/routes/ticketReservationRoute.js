const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddlware')
const {
    getTicket,
    setTicket,
    updateTicket,
    deleteTicket,
    getMyTickets
} = require('../controllers/ticketReservationController')

router.route('/').get(getTicket).post(setTicket)
router.route('/:id').get(protect,getMyTickets).put(updateTicket).delete(deleteTicket)

module.exports = router