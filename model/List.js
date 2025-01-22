const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  listEntries: [
    {
      itemName: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ]
})

module.exports = mongoose.model('List', listSchema)
