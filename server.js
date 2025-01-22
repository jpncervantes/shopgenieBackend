const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const PORT = process.env.PORT || 3500
const express = require('express')
require('dotenv').config()

const app = express()

//connect DB
connectDB()

//connect middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect routs
app.use('/list', require('./routes/api/list'))
console.log('test')

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log('Server running on port 3500')
  })
})
