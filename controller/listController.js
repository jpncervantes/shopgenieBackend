const List = require('../model/List')
const { format } = require('date-fns')

const dateTime = `${format(new Date(), 'yyyyMMddHHmmss')}`
const listName = `list_${format(new Date(), 'yyyyMMMd').toUpperCase()}`

const createList = async (req, res) => {
  const newList = await List.create({
    name: listName,
    date: dateTime,
    listEntries: req.body.listEntries
  })
  res.json(newList)
}

const getList = async (req, res) => {
  const matchedList = await List.find({})
  console.log(matchedList, 'matchedList')
  res.json(matchedList)
}

module.exports = { createList, getList }
