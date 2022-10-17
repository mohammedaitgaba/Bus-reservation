const express = require('express')
const router = express.Router()
const {
    getTicket,
    setTicket,
    updateTicket,
    deleteTicket
} = require('../controllers/ticketReservationController')

router.route('/').get(getTicket).post(setTicket)
router.route('/:id').put(updateTicket).delete(deleteTicket)

module.exports = router