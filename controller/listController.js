const moment = require('moment')
const List = require('../model/List')
const { format } = require('date-fns')
const getTotalAmount = require('../utils/getTotalAmountHelper.js')

const dateTime = moment().local().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
const listName = `list_${format(new Date(), 'yyyyMMMd').toUpperCase()}`

const createList = async (req, res) => {
  const totalAmount = getTotalAmount(req.body.listEntries)
  console.log(totalAmount)
  const newList = await List.create({
    name: listName,
    date: dateTime,
    listEntries: req.body.listEntries,
    totalAmount: totalAmount
  })
  res.json(newList)
}

const getList = async (req, res) => {
  const matchedList = await List.find({})
  console.log(matchedList, 'matchedList')
  res.json(matchedList)
}

module.exports = { createList, getList }
