const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT 

// app.use('/api/users',require('./routes/usersRoute'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})