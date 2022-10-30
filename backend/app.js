const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const colors = require('colors')
const cors = require('cors')
connectDB()

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded( {extended : false} ))
app.use(cors())

// Routes

app.use('/api/users',require('./routes/usersRoute'))
app.use('/api/travel',require('./routes/travelRoute'))
app.use('/api/ticket',require('./routes/ticketReservationRoute'))
app.use('/api/bus',require('./routes/busRoute'))
app.use('/api/admin',require('./routes/adminRoute'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})