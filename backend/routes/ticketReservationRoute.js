const express = require('express')
const router = express.Router()
const {
    getTicket,
    setTicket,
    updateTicket,
    deleteTicket,
    getMyTickets
} = require('../controllers/ticketReservationController')

router.route('/').get(getTicket).post(setTicket)
router.route('/:id').get(getMyTickets).put(updateTicket).delete(deleteTicket)

module.exports = router