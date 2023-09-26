//require express
const express = require('express')

//create instance
const app = express()

//middleware body parser
app.use(express.json())

//require dotenv
require('dotenv').config()


//connect to DB
const connect= require('./config/connectDB')
connect()

//create port
const PORT = process.env.PORT

//create server
app.listen(PORT,(err)=>{
    err? console.log(err)
    :
    console.log(`server running on PORT : ${PORT}`)
})


//require router
app.use('/api/contacts',require('./routes/contactRoute'))

app.use('/api/users',require('./routes/userRoute'))