const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const PORT = process.env.PORT || 3500
const express = require('express')
const credentials = require('./middleware/credentials')
const corsOption = require('./config/corsOptions')
require('dotenv').config()
const cors = require('cors')

const app = express()

//connect DB
connectDB()

//connect middlewares
app.use(credentials)
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//connect routs
app.use('/list', require('./routes/api/list'))

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log('Server running on port 3500')
  })
})
