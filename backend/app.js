const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const colors = require('colors')
connectDB()

const app = express()
const port = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded( {extended : false} ))

app.use('/api/users',require('./routes/usersRoute'))
app.use('/api/travel',require('./routes/travelRoute'))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})